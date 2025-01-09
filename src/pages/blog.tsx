import React, { useEffect, useState } from "react"
import { HeadFC, Link } from "gatsby"
import DefaultLayout from "../components/default-layout"
import { graphqlURL } from "../constants"

const queryParamsLocal = {
  query: `{
    allSanityPost {
      nodes {
        slug {
          current
        }
        title
      }
    }
  }` , 
  result: "allSanityPost.nodes"
} as const

const queryParamsRemote = {
  query: `query {
    allPost {
      slug {
        current
      }
      title
    }
  }`,
  result: "allPost"
} as const

const queryParams = process.env.LOCAL ? queryParamsLocal : queryParamsRemote

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(graphqlURL)
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(graphqlURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: queryParams.query,
          }),
        })

        const result = await response.json()
        if (result.errors) {
          throw new Error(result.errors[0].message)
        }

        setPosts(result.data[queryParams.result])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <DefaultLayout>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: { title: string; slug: { current: string } }) => (
          <li key={post.slug.current}>
            <Link to={`${post.slug.current}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  )
}

export default Blog

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Blog</title>
)

