import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import DefaultLayout from "../components/default-layout"
import Post from "../components/post"
import { remoteGraphqlURL } from "../constants"

// Props injected during build time
type PostPageContext = {
  slug: string
  title?: string
  publishedAt?: string
  bodyRaw?: any
  author?: string
  mainImage: {
    gatsbyImage?: IGatsbyImageData | null
    description?: string
    altText?: string
    title?: string
  }
}

// type for fetching remote data: dynamic fallback
type RemotePost = {
  title: string
  publishedAt: string
  bodyRaw: any
  author?: string
  image?: {
    asset?: {
      url?: string
      description?: string
      altText?: string
      title?: string
    }
  }
  slug: {
    current: string
  }
}

const PostTemplate: React.FC<PageProps<{}, PostPageContext>> = ({
  pageContext,
}) => {
  const [post, setPost] = useState<RemotePost | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Destructure static context
  const { slug, title, publishedAt, bodyRaw, mainImage } = pageContext
  const { gatsbyImage, description, altText, title: imgTitle } = mainImage

  const fetchPostData = async (slug: string) => {
    console.log("Fetching data for!", slug)
    try {
      const query = `query {
        allPost {
          title
          slug {
            current
          }
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
      if (result.errors) {
        throw new Error(result.errors[0].message)
      }

      // TODO typing
      const thePost = result.data.allPost
        .filter((post: RemotePost) => post.slug.current === `${slug}`)
        .at(0)
      if (!thePost) {
        console.warn("No post found for slug", slug)
        console.log("Posts found were", result.data)
        return
      }
      return thePost
    } catch (err) {
      setError("Failed to fetch post data.")
      return null
    }
  }

  useEffect(() => {
    // if there is no title, it means we do not have static data
    if (!title) {
      const loadPost = async () => {
        setLoading(true)
        const fetchedPost = await fetchPostData(pageContext.slug)
        if (fetchedPost) {
          setPost(fetchedPost)
        }
        setLoading(false)
      }

      loadPost()
    }
  }, [slug, title])

  // If we have static data, use it. Otherwise, use dynamic data
  const renderTitle = title || post?.title || "Loading..."
  const renderPublishedAt = publishedAt || post?.publishedAt || null
  const renderBody = bodyRaw || post?.bodyRaw || null
  const author = pageContext.author || post?.author || null

  // main image code
  const mainImgAlt = altText || post?.image?.asset?.altText || ""
  const renderImageUrl = post?.image?.asset?.url || null
  const mainImageTitle = imgTitle || post?.image?.asset?.title || ""
  const mainImageDescription =
    description || post?.image?.asset?.description || ""

  // Handle loading and error states
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <DefaultLayout>
      <Post
        renderTitle={renderTitle}
        renderPublishedAt={renderPublishedAt ?? ""}
        gatsbyImage={gatsbyImage ?? undefined}
        renderImageUrl={renderImageUrl ?? ""}
        renderBody={renderBody}
        author={author ?? ""}
        coverImageAlt={mainImgAlt}
      />
    </DefaultLayout>
  )
}

export default PostTemplate
