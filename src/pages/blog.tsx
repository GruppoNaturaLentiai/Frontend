import { graphql, HeadFC, PageProps } from "gatsby"
import React, { useEffect, useMemo, useState } from "react"
import DefaultLayout from "../components/default-layout"
import { remoteGraphqlURL } from "../constants"
import { FeaturedBlog, PostInfo } from "../components/blog-list"
import { fromBodyRawToExcerpt } from "../helpers"
import { SEO } from "../components/seo"

// Definiamo il tipo per i dati che arrivano dalla query GraphQL di Gatsby
type BlogData = {
  allSanityPost: {
    nodes: Array<{
      id: string
      title: string
      publishedAt: string
      _rawBody: any
      author: string
      slug: { current: string }
      image: {
        asset: {
          description: string
          altText: string
          title: string
          gatsbyImageData: any
        }
      }
    }>
  }
}

const filterDummyPosts = (post: PostInfo) =>
  post.slug !== "/post/1" && post.slug !== "/post/2"

const sortByPublishedAt = (p1: PostInfo, p2: PostInfo) =>
  new Date(p1.publishedAt).getTime() - new Date(p2.publishedAt).getTime()

const Blog: React.FC<PageProps<BlogData>> = ({ data, location }) => {
  const isFromPost = (location.state as any)?.fromPost === true

  // Trasformiamo i dati statici di Gatsby nel formato PostInfo
  const staticPosts: PostInfo[] = useMemo(() => {
    return (data.allSanityPost.nodes || []).map(node => ({
      id: node.id,
      title: node.title,
      publishedAt: node.publishedAt,
      author: node.author,
      slug: node.slug.current,
      excerpt: fromBodyRawToExcerpt(node._rawBody),
      coverImage: {
        description: node.image?.asset?.description,
        altText: node.image?.asset?.altText,
        title: node.image?.asset?.title,
        gatsbyImage: node.image?.asset?.gatsbyImageData || null,
      },
    }))
  }, [data])

  const [posts, setPosts] = useState<PostInfo[]>(
    staticPosts.filter(filterDummyPosts).sort(sortByPublishedAt).reverse()
  )

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `query {
          allPost {
            _id
            slug { current }
            title
            publishedAt
            bodyRaw
            author
            image {
              asset {
                description
                title
                altText
                url
              }
            }
          }
        }`

        const response = await fetch(remoteGraphqlURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        })

        const result = await response.json()
        if (result.errors) throw new Error(result.errors[0].message)

        const remotePostsRaw = result.data?.allPost ?? []

        const remotePosts: PostInfo[] = remotePostsRaw.map((p: any) => ({
          id: p._id,
          title: p.title,
          publishedAt: p.publishedAt,
          author: p.author,
          slug: p.slug.current,
          excerpt: fromBodyRawToExcerpt(p.bodyRaw),
          coverImage: {
            description: p.image?.asset?.description,
            altText: p.image?.asset?.altText,
            title: p.image?.asset?.title,
            renderImageUrl: p.image?.asset?.url || null,
          },
        }))

        // Uniamo i post statici con quelli remoti (evitando duplicati)
        const combined = [...staticPosts]
        remotePosts.forEach(rp => {
          if (!combined.some(cp => cp.slug === rp.slug)) {
            combined.push(rp)
          }
        })

        setPosts(
          combined.filter(filterDummyPosts).sort(sortByPublishedAt).reverse()
        )
      } catch (err: any) {
        console.error("Errore nel fetch remoto, uso i dati statici:", err)
      }
    }

    fetchPosts()
  }, [staticPosts])

  return (
    <DefaultLayout>
      <FeaturedBlog posts={posts} isFromPost={isFromPost} />
    </DefaultLayout>
  )
}

// Questa query viene eseguita da Gatsby a tempo di build
export const query = graphql`
  query BlogPageQuery {
    allSanityPost(sort: { publishedAt: DESC }) {
      nodes {
        id
        title
        publishedAt
        _rawBody
        author
        slug {
          current
        }
        image {
          asset {
            description
            altText
            title
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default Blog

export const Head: HeadFC = ({ location }) => (
  <SEO title="Gruppo Natura Lentiai - Blog" pathname={location.pathname} />
)