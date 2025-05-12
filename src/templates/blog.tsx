import { HeadFC, PageProps } from "gatsby"
import * as _ from "lodash"
import React, { useEffect, useMemo, useState } from "react"
import DefaultLayout from "../components/default-layout"
import { remoteGraphqlURL } from "../constants"
import { FeaturedBlog, PostInfo } from "../components/blog-list"
import { fromBodyRawToExcerpt } from "../helpers"

type PostPageContext = {
  postsInfo?: PostInfo[]
}

const filterDummyPosts = (post: PostInfo) =>
  post.slug !== "/post/1" && post.slug !== "/post/2"

const sortByPublishedAt = (p1: PostInfo, p2: PostInfo) =>
  new Date(p1.publishedAt).getTime() - new Date(p2.publishedAt).getTime()

const Blog: React.FC<PageProps<{}, PostPageContext>> = ({ pageContext }) => {
  const { postsInfo } = pageContext

  const cachedPosts = useMemo(
    () => postsInfo?.filter(filterDummyPosts)
      .sort(sortByPublishedAt)
      .reverse() ?? [],
    [postsInfo],
  )
  const [posts, setPosts] = useState<PostInfo[]>(cachedPosts)

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

        if (result.errors) {
          throw new Error(result.errors[0].message)
        }

        // TODO typing
        const remotePosts = _.get(result.data, "allPost", cachedPosts).map(
          (p: any) => ({
            ...p,
            slug: p.slug.current,
            excerpt: fromBodyRawToExcerpt(p.bodyRaw),
            id: p._id,
            coverImage: {
              description: p.image?.asset?.description,
              altText: p.image?.asset?.altText,
              title: p.image?.asset?.title,
              renderImageUrl: p.image ? p.image.asset.url : null,
            },
          }),
        )

        const newPosts = remotePosts
          .filter((p: any) => !cachedPosts
            ?.some((cp: any) => cp.slug === p.slug
            )
          ).filter(filterDummyPosts)

        setPosts([...cachedPosts, ...newPosts].sort(sortByPublishedAt).reverse())

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
      <FeaturedBlog posts={posts} />
    </DefaultLayout>
  )
}

export default Blog

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Blog</title>
