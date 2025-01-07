// src/components/Post.tsx
import React from "react"
import { PortableText } from "@portabletext/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import components from "../portable-text-components"

type PostProps = {
  title: string
  publishedAt: string
  _rawBody: any
  image?: {
    asset: {
      gatsbyImageData: any
    }
  }
}

const Post: React.FC<PostProps> = ({ title, publishedAt, _rawBody, image }) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{new Date(publishedAt).toLocaleDateString()}</p>
      {image && (
        <GatsbyImage
          image={getImage(image.asset.gatsbyImageData)!}
          alt={title}
        />
      )}
      <PortableText value={_rawBody} components={components} />
    </article>
  )
}

export default Post
