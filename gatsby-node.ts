import { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Fetch all posts from Sanity (REMOTE)
  const allPosts = await graphql<any>(`
    query SourcingAllPosts {
      allSanityPost {
        nodes {
          slug {
            current
          }
          title
          publishedAt
          _rawBody
          author
          image {
            asset {
              description
              altText
              title
              gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  const posts = allPosts?.data.allSanityPost.nodes

  if (!allPosts?.data?.allSanityPost) {
    reporter.panicOnBuild("Something went wrong with the query!")
    console.dir(allPosts, { depth: null })
    return
  }

  if (posts.length === 0) {
    reporter.panicOnBuild("No posts found")
    return
  }

  // 1️⃣ Pagine statiche dei post
  posts.forEach((post: any) => {
    if (post.slug?.current) {
      createPage({
        path: post.slug.current,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          slug: post.slug.current
        },
      })
    }
  })

  // 2️⃣ Pagina Blog (ORA VUOTA)
  createPage({
    path: "blog",
    component: path.resolve("src/templates/blog.tsx"),
    context: {}, // I dati verranno presi dalla Page Query che abbiamo scritto prima
  })
}
