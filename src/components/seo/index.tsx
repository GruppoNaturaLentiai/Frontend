import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  image?: string
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
          author {
            name
            linkedin
            github
          }
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const author = meta.author

  const seo = {
    title: title || meta.title,
    description: description || meta.description,
    image: image
      ? `${meta.siteUrl}${image}`
      : `${meta.siteUrl}/default-share-image.jpg`,
    url: `${meta.siteUrl}${pathname || ""}`.replace(/\/?$/, "/"),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gruppo Natura Lentiai",
    url: meta.siteUrl,
    description: meta.description,
    creator: {
      "@type": "Person",
      name: author.name,
      sameAs: [author.linkedin, author.github],
    },
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={author.name} />
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

      {/* Identity links */}
      <link rel="me" href={author.linkedin} />
      <link rel="me" href={author.github} />
      <link rel="author" href={author.linkedin} />

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {children}
    </>
  )
}
