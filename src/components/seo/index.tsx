import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const defaultTitle = site.siteMetadata?.title
  const defaultDescription = site.siteMetadata?.description
  const siteUrl = site.siteMetadata?.siteUrl

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  )
}
