import React from "react"
import { PortableText } from "@portabletext/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import components from "../portable-text-components"

interface PostProps {
  title: string;
  publishedAt: string;
  _rawBody: any;
  image?: {
    asset: {
      gatsbyImageData?: any; // Gatsby build-time images
      url?: string;          // Remote runtime images, sanity doesn't provide GatsbyImage data
    };
  };
}

const Post: React.FC<PostProps> = ({ title, publishedAt, _rawBody, image }) => {

  const gatsbyImage = image?.asset?.gatsbyImageData
    ? getImage(image.asset.gatsbyImageData)
    : null;
  const imageUrl = image?.asset?.url;

  return (
    <article>
      <h1>{title}</h1>
      <p> Articolo pubblicato in data: {new Date(publishedAt).toLocaleDateString()} </p>
      {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={title} />}
      {!gatsbyImage && imageUrl && (
        <img src={imageUrl} alt={title} style={{ maxWidth: "100%", height: "auto" }} />
      )}
      <PortableText value={_rawBody} components={components} />
    </article>
  )
}

export default Post
