import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import { getImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"
import { ImageData } from "../types"

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

  return (
    <DefaultLayout>
      <Carousel images={filteredImages} />
    </DefaultLayout>
  )
}

export default ChiSiamoPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Chi siamo</title>
)
