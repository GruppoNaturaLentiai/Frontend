import { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Fetch all posts from Sanity
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
          author: post.author,
          mainImage: {
            description: post.image?.asset?.description,
            altText: post.image?.asset?.altText,
            title: post.image?.asset?.title,
            gatsbyImage: post.image ? post.image.asset.gatsbyImageData : null,
          },
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
