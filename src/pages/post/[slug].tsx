// src/pages/blog.tsx
import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import Post from "../../components/post"
import DefaultLayout from "../../components/default-layout"

const Blog = () => {
  const location = useLocation()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Extract the slug from the URL and remove the trailing "/"
  const slug = location.pathname.slice(0, -1); 

  useEffect(() => {
    if (!slug) return
    console.log(slug)
    const fetchData = async () => {
      setLoading(true)
      setError(null)


      try {
        const response = await fetch("/___graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
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
          }),
        })

        const result = await response.json()
        if (result.errors) {
          throw new Error(result.errors[0].message)
        }

        setPost(result.data.sanityPost)
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
      <Post
        title={title}
        publishedAt={publishedAt}
        _rawBody={_rawBody}
        image={image}
      />
    </DefaultLayout>
  )
}

export default Blog