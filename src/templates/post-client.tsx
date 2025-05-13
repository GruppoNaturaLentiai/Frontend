import { useLocation } from "@reach/router"
import React, { useEffect, useState } from "react"
import DefaultLayout from "../components/default-layout"
import Post from "../components/post"
import { remoteGraphqlURL } from "../constants"

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

const PostClientTemplate: React.FC = () => {
  const { pathname } = useLocation()
  const slug = pathname // Use the full path as the slug

  const [post, setPost] = useState<RemotePost | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPostData = async (slug: string) => {
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
        .filter(
          (post: RemotePost) =>
            post.slug.current === slug ||
            post.slug.current === slug.slice(0, -1),
        )
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
    const loadPost = async () => {
      setLoading(true)
      const fetchedPost = await fetchPostData(slug)
      if (fetchedPost) {
        setPost(fetchedPost)
      }
      setLoading(false)
    }

    loadPost()
  }, [slug])

  // If we have static data, use it. Otherwise, use dynamic data
  const renderTitle = post?.title || "Loading..."
  const renderPublishedAt = post?.publishedAt || null
  const renderBody = post?.bodyRaw || null
  const author = post?.author || null

  // main image code
  const mainImgAlt = post?.image?.asset?.altText || ""
  const renderImageUrl = post?.image?.asset?.url || null

  // Handle loading and error states
  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore: {error}</p>

  return (
    <DefaultLayout>
      <Post
        renderTitle={renderTitle}
        renderPublishedAt={renderPublishedAt ?? ""}
        gatsbyImage={undefined}
        renderImageUrl={renderImageUrl ?? ""}
        renderBody={renderBody}
        author={author ?? ""}
        coverImageAlt={mainImgAlt}
      />
    </DefaultLayout>
  )
}

export default PostClientTemplate
