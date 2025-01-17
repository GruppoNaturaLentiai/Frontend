import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import DefaultLayout from "../../components/default-layout"
import ContentToComponent from "../../components/pagedata-text-components"
import { ImageData } from "../../types"
import * as T from "./../../components/typography"

const LaghettiNaturaPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["laghetti-storia"] } }) {
        nodes {
          title
          description
          fileName
          tags
          copyright
          alt
        }
      }
      allDataJson {
        nodes {
          laghetti {
            natura {
              type
              size
              font
              content
            }
          }
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const content = data.allDataJson.nodes[0].laghetti.natura
  if (!content) return <T.H1>Contenuto non trovato!</T.H1>

  // Map metadata and image nodes
  const metadata = data.allImageMetadataJson.nodes
  const images = data.allFile.nodes

  // Match images to metadata using the fileName
  const filteredImages = metadata.map((meta: any) => {
    const image = images.find((img: any) => img.base === meta.fileName)
    return {
      ...meta,
      image: image ? getImage(image.childImageSharp) : null,
    }
  }) as ImageData[]

  return (
    <DefaultLayout>
      <ContentToComponent pageData={content} images={filteredImages} />
    </DefaultLayout>
  )
}

export default LaghettiNaturaPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
