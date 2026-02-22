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
      allSanityPost(sort: { publishedAt: DESC }) { 
        nodes {
          slug {
            current
          }
          title
        }
      }
    }
  `)

  const posts = allPosts?.data.allSanityPost.nodes

  if (!posts || posts.length === 0) {
    reporter.panicOnBuild("No posts found")
    return
  }

  // 1️⃣ Pagine statiche dei post (AGGIUNTA LOGICA PREV/NEXT)
  posts.forEach((post: any, index: number) => {
    // Essendo in ordine dal più recente al più vecchio:
    // Il precedente (più vecchio) è index + 1
    // Il successivo (più recente) è index - 1
    const prev = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    if (post.slug?.current) {
      createPage({
        path: post.slug.current,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          slug: post.slug.current,
          prevSlug: prev?.slug?.current || null,
          prevTitle: prev?.title || null,
          nextSlug: next?.slug?.current || null,
          nextTitle: next?.title || null,
        },
      })
    }
  })
}
