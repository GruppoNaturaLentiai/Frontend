import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import ContentToComponent from "../../components/pagedata-text-components"
import { getImage } from "gatsby-plugin-image"
import * as T from "./../../components/typography"
import { ImageData } from "../../types"

const LaghettiMappePage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["laghetti-mappe"] } }) {
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
            mappe {
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
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const content = data.allDataJson.nodes[0].laghetti.mappe
  if (!content) return (<DefaultLayout>
    <T.H1>Contenuto non trovato!</T.H1>
    </DefaultLayout>
  )

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

export default LaghettiMappePage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
