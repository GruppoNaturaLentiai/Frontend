import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import PostComponent from "../../components/post"
import DefaultLayout from "../../components/default-layout"
import { graphqlURL } from "../../constants"

const queryParamsLocal = (slug: string) => ({
  query: `{
            sanityPost(slug: { current: { eq: \"${slug}\" } }) {
              title
              publishedAt
              _rawBody
              image {
                asset {
                  gatsbyImageData(layout: CONSTRAINED, width: 800)
                }
              }
            }
          }`,
  result: "sanityPost",
  filterFn: (data: any) => data
}) as const

const queryParamsRemote = (slug: string) => ({
  query: `query {
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
  }`,
  result: "allPost",
  filterFn: (data: any[]) => data.filter(x => x.slug.current === `/${slug}`).at(0)
}) as const

const queryParams = process.env.LOCAL ? queryParamsLocal : queryParamsRemote

const Post = () => {
  const location = useLocation()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Extract the slug from the URL and remove the trailing "/" and leading "/"
  const slug = location.pathname.slice(0, -1).replace(/^\//, "")

  useEffect(() => {
    if (!slug) return

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(graphqlURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: queryParams(slug).query
          }
          ),
        })

        const result = await response.json()
        if (result.errors) {
          throw new Error(result.errors[0].message)
        }

        const resultKey = queryParams(slug).result
        const res = result.data[resultKey]
        const newState = queryParams(slug).filterFn(res)

        setPost(newState)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!post) return <p>No post found.</p>

  const { title, publishedAt, _rawBody, image } = post

  // Render the Post component with the fetched data
  return (
    <DefaultLayout>
      <PostComponent
        title={title}
        publishedAt={publishedAt}
        _rawBody={_rawBody}
        image={image}
      />
    </DefaultLayout>
  )
}

export default Post
