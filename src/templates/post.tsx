import { PageProps, HeadFC } from "gatsby"
import { SEO } from "../components/seo"
import { IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import DefaultLayout from "../components/default-layout"
import Post from "../components/post"

// Props injected during build time
type PostPageContext = {
  slug: string
  title?: string
  publishedAt?: string
  bodyRaw?: any
  author?: string
  mainImage: {
    gatsbyImage?: IGatsbyImageData | null
    description?: string
    altText?: string
    title?: string
  }
}

const PostTemplate: React.FC<PageProps<{}, PostPageContext>> = ({
  pageContext,
}) => {
  // Destructure static context
  const { title, publishedAt, bodyRaw, mainImage } = pageContext
  const { gatsbyImage, altText } = mainImage

  // If we have static data, use it. Otherwise, use dynamic data
  const renderTitle = title || "Loading..."
  const renderPublishedAt = publishedAt || null
  const renderBody = bodyRaw || null
  const author = pageContext.author || null

  // main image code
  const mainImgAlt = altText || ""
  const renderImageUrl = null

  return (
    <DefaultLayout>
      <Post
        renderTitle={renderTitle}
        renderPublishedAt={renderPublishedAt ?? ""}
        gatsbyImage={gatsbyImage ?? undefined}
        renderImageUrl={renderImageUrl ?? ""}
        renderBody={renderBody}
        author={author ?? ""}
        coverImageAlt={mainImgAlt}
      />
    </DefaultLayout>
  )
}

export default PostTemplate

export const Head: HeadFC<{}, PostPageContext> = ({ location, pageContext }) => {
  const { title, mainImage } = pageContext
  return (
    <SEO
      title={`Gruppo Natura Lentiai - ${title}`}
      description={mainImage?.description || mainImage?.altText}
      pathname={location.pathname}
    />
  )
}
