import { GatsbyNode } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import _ from "lodash"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Fetch all posts from Sanity (REMOTE)
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

  // 1️⃣ Static pages for known slugs
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

  // 2️⃣ Client-only fallback for any /post/* not built
  createPage({
    path: `/post`,
    matchPath: `/post/*`, // catch everything under /post/…
    component: path.resolve(`src/templates/post-client.tsx`),
  })

  // BLOG PAGE
  // Create the blog page injecting the posts info
  const postsInfo =
    posts.map((post: any) => {
      const texts = post._rawBody
        .filter((c: any) => c._type === "block")
        .map((c: any) => c.children[0].text)
        .join(". ")
        .slice(0, 200)

      return {
        id: post?.id,
        slug: post?.slug?.current,
        title: post?.title,
        publishedAt: post?.publishedAt,
        author: post?.author,
        excerpt: texts,
        coverImage: {
          description: post.image?.asset?.description,
          altText: post.image?.asset?.altText,
          title: post.image?.asset?.title,
          gatsbyImage: post.image
            ? getImage(post.image.asset.gatsbyImageData)
            : null,
        },
      }
    }) ?? []

  createPage({
    path: "blog",
    component: path.resolve("src/templates/blog.tsx"),
    context: { postsInfo },
  })
}
