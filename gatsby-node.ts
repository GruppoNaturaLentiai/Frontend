import { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  // Fetch known slugs from Sanity
  const allPosts = await graphql<any>(`
    query {
      allSanityPost {
        nodes {
          slug {
            current
          }
          title
          publishedAt
          _rawBody
          image {
            asset {
              gatsbyImageData(width: 1200)
            }
          }
        }
      }
    }
  `)

  const posts = allPosts?.data.allSanityPost.nodes

  // Create pages for each post
  posts.forEach((post: any) => {
    if (post.slug?.current) {
      createPage({
        path: post.slug.current,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          slug: post.slug.current,
          title: post.title,
          publishedAt: post.publishedAt,
          bodyRaw: post._rawBody,
          gatsbyImage: post.image ? post.image.asset.gatsbyImageData : null,
        },
      })
    }
  })

  // Create the blog page injecting the posts info
  const postsInfo =
    posts.map((post: any) => ({
      slug: post?.slug?.current,
      title: post?.title,
      publishedAt: post?.publishedAt,
    })) ?? []
  createPage({
    path: "blog",
    component: path.resolve("src/templates/blog.tsx"),
    context: { postsInfo },
  })
}
