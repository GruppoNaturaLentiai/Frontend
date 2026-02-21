// src/templates/post.tsx
import { PageProps, HeadFC, graphql } from "gatsby"
import { SEO } from "../components/seo"
import { IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import DefaultLayout from "../components/default-layout"
import Post from "../components/post"

// Definisci i tipi in base a ciò che ritorna la query
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
      }
    }
  }
}

// pageContext conterrà solo lo slug che gli passiamo da gatsby-node
type PostPageContext = {
  slug: string
}

const PostTemplate: React.FC<PageProps<PostData, PostPageContext>> = ({
  data,
}) => {
  const post = data.sanityPost

  if (!post) {
    return <DefaultLayout><p>Post non trovato</p></DefaultLayout>
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
      description={post?.image?.asset?.description || post?.image?.asset?.altText}
      pathname={location.pathname}
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