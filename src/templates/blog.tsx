import { HeadFC, Link, PageProps } from "gatsby"
import * as _ from "lodash"
import React, { useEffect, useMemo, useState } from "react"
import DefaultLayout from "../components/default-layout"
import * as T from "../components/typography"
import { remoteGraphqlURL } from "../constants"
import { FeaturedBlog, PostInfo } from "../components/blog-list"
import { getImage } from "gatsby-plugin-image"
import { fromBodyRawToExcerpt } from "../helpers"

type PostPageContext = {
  postsInfo?: PostInfo[]
}

const sortByPublishedAt = (p1: PostInfo, p2: PostInfo) =>
  new Date(p1.publishedAt).getTime() - new Date(p2.publishedAt).getTime()

const Blog: React.FC<PageProps<{}, PostPageContext>> = ({ pageContext }) => {
  const { postsInfo } = pageContext

  const cachedPosts = useMemo(
    () => postsInfo?.sort(sortByPublishedAt).reverse(),
    [postsInfo],
  )
  const [posts, setPosts] = useState<PostInfo[]>(cachedPosts ?? [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `query {
          allPost {
            slug {
              current
            }
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
        console.log(result)
        if (result.errors) {
          throw new Error(result.errors[0].message)
        }

        // TODO typing  
        const newPosts = _.get(result.data, "allPost", cachedPosts)
          .map((p: any) => ({
            ...p,
            slug: p.slug.current,
            excerpt: fromBodyRawToExcerpt(p.bodyRaw),
            id: p._id,
            coverImage: {
              description: p.image?.asset?.description,
              altText: p.image?.asset?.altText,
              title: p.image?.asset?.title,
              gatsbyImage: p.image ? getImage(p.image.asset.gatsbyImageData) : null,
            },
          }))
          .sort(sortByPublishedAt)
          .reverse()

        setPosts(newPosts)
      } catch (err: any) {
        console.error(err)
        console.warn(
          "Using cached posts, error in doing the remote query",
          remoteGraphqlURL,
        )
      }
    }

    fetchPosts()
  }, [cachedPosts, remoteGraphqlURL])

  return (
    <DefaultLayout>
      <T.H1>Blog</T.H1>
      <FeaturedBlog posts={posts} />;
    </DefaultLayout>
  )
}

export default Blog

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Blog</title>
