import { PortableText } from "@portabletext/react"
import { PageProps } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import DefaultLayout from "../components/default-layout"
import Components from "../components/portable-text-components"
import { remoteGraphqlURL } from "../constants"
import _ from "lodash"
import * as T from "../components/typography"

// Props injected during build time
type PostPageContext = {
  slug: string
  title?: string
  publishedAt?: string
  bodyRaw?: any
  gatsbyImage?: IGatsbyImageData | null
}

// type for fetching remote data: dynamic fallback
type RemotePost = {
  title: string
  publishedAt: string
  bodyRaw: any
  image?: {
    asset?: {
      url?: string
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
  const { slug, title, publishedAt, bodyRaw, gatsbyImage } = pageContext

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
          image {
            asset {
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
  const renderImageUrl = post?.image?.asset?.url || null

  // Handle loading and error states
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <DefaultLayout>
      <article>
        <T.H1>{renderTitle}</T.H1>
        {renderPublishedAt && (
          <T.P4>
            Articolo pubblicato in data:{" "}
            {new Date(renderPublishedAt).toLocaleDateString()}
          </T.P4>
        )}
        {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={title ?? ""} />}
        {!gatsbyImage && renderImageUrl && (
          <img
            src={renderImageUrl}
            alt={title}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
        <PortableText
          // Use _rawBody if present (that is we are in local environment), otherwise use bodyRaw (remote sanity api)
          value={renderBody}
          components={Components}
        />
      </article>
    </DefaultLayout>
  )
}

export default PostTemplate
