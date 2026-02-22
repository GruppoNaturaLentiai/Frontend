// src/templates/post.tsx
import { PageProps, HeadFC, graphql } from "gatsby"
import { SEO } from "../components/seo"
import { IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import DefaultLayout from "../components/default-layout"
import Post from "../components/post"

type PostData = {
  sanityPost: {
    title: string
    publishedAt: string
    _rawBody: any
    author: string
    image: {
      asset: {
        description: string
        altText: string
        title: string
        gatsbyImageData: IGatsbyImageData
        url: string
      }
    }
  }
}

type PostPageContext = {
  slug: string
  prevSlug: string | null
  prevTitle: string | null
  nextSlug: string | null
  nextTitle: string | null
}

const PostTemplate: React.FC<PageProps<PostData, PostPageContext>> = ({
  data,
  pageContext,
}) => {
  const post = data.sanityPost

  if (!post) {
    return (
      <DefaultLayout>
        <p>Post non trovato</p>
      </DefaultLayout>
    )
  }

  const renderTitle = post.title || "Loading..."
  const renderPublishedAt = post.publishedAt || null
  const renderBody = post._rawBody || null
  const author = post.author || null

  const mainImgAlt = post.image?.asset?.altText || ""
  const gatsbyImage = post.image?.asset?.gatsbyImageData || undefined
  const renderImageUrl = null

  return (
    <DefaultLayout>
      <Post
        renderTitle={renderTitle}
        renderPublishedAt={renderPublishedAt ?? ""}
        gatsbyImage={gatsbyImage}
        renderImageUrl={renderImageUrl ?? ""}
        renderBody={renderBody}
        author={author ?? ""}
        coverImageAlt={mainImgAlt}
        prevPost={
          pageContext.prevSlug
            ? { slug: pageContext.prevSlug, title: pageContext.prevTitle }
            : null
        }
        nextPost={
          pageContext.nextSlug
            ? { slug: pageContext.nextSlug, title: pageContext.nextTitle }
            : null
        }
      />
    </DefaultLayout>
  )
}

export default PostTemplate

// La Head query riceve i dati dalla query principale
export const Head: HeadFC<PostData, PostPageContext> = ({ location, data }) => {
  const post = data.sanityPost
  return (
    <SEO
      title={`Gruppo Natura Lentiai - ${post?.title}`}
      description={
        post?.image?.asset?.description || post?.image?.asset?.altText
      }
      pathname={location.pathname}
      image={post?.image?.asset?.url}
    />
  )
}

// QUESTA È LA MAGIA: Gatsby usa la variabile $slug dal pageContext per cercare il singolo post
export const query = graphql`
  query SinglePostQuery($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt
      _rawBody
      author
      image {
        asset {
          description
          altText
          url
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
`
