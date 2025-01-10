import React, { useEffect, useMemo, useState } from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import { remoteGraphqlURL } from "../constants"
import * as _ from "lodash"

// Props injected during build time
type PostInfo = {
  slug: string
  title: string
  publishedAt: string
}

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
        const newPosts = _.get(result.data, "allPost", cachedPosts)
          .map((p: any) => ({
            ...p,
            slug: p.slug.current,
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
      <h1>Blog</h1>
      <ul>
        {posts.map((post, idx) => (
          <li key={`post-${idx}`}>
            <Link to={`${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  )
}

export default Blog

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Blog</title>
