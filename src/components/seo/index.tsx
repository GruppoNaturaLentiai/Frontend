import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  image?: string // Aggiungiamo l'immagine
  children?: React.ReactNode
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
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

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: image
      ? `${site.siteMetadata.siteUrl}${image}`
      : `${site.siteMetadata.siteUrl}/default-share-image.jpg`, // Inserisci un'immagine generica di fallback in static/
    url: `${site.siteMetadata.siteUrl}${pathname || ""}`.replace(/\/?$/, '/'),
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {children}
    </>
  )
}
