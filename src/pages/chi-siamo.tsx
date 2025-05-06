import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import { getImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"
import { DataJSONType, ImageData } from "../types"
import dataJSON from "../../content/chi-siamo.json"
import ContentToComponent from "../components/pagedata-text-components"
import MobileContentToComponent from "../components/mobile-pagedata-text-components"
import * as T from "../components/typography"

const ChiSiamoPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["chi-siamo"] } }) {
        nodes {
          title
          description
          fileName
          tags
          copyright
          alt
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              width: 1400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  // Map metadata and image nodes
  const metadata = data.allImageMetadataJson.nodes
  const images = data.allFile.nodes

  // Match images to metadata using the fileName
  const filteredImages = metadata.map((meta: any) => {
    const image = images.find((img: any) => img.base === meta.fileName)
    return {
      ...meta,
      ...image,
      image: image ? getImage(image.childImageSharp) : null,
    }
  }) as ImageData[]

  const content = dataJSON["chi-siamo"] as DataJSONType
  if (!content)
    return (
      <DefaultLayout>
        <T.H1>Contenuto non trovato!</T.H1>
      </DefaultLayout>
    )

  return (
    <DefaultLayout>
      <ContentToComponent pageData={content} images={filteredImages} />
      <MobileContentToComponent pageData={content} images={filteredImages} />
      <Carousel images={filteredImages} />
    </DefaultLayout>
  )
}

export default ChiSiamoPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Chi siamo</title>
)
