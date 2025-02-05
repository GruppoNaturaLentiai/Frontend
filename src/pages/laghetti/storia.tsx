import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import dataJSON from "../../../content/laghetti/storia.json"
import DefaultLayout from "../../components/default-layout"
import ContentToComponent from "../../components/pagedata-text-components"
import { DataJSONType, ImageData } from "../../types"
import * as T from "./../../components/typography"
import MobileContentToComponent from "../../components/mobile-pagedata-text-components"

const LaghettiStoriaPage: React.FC<PageProps> = () => {
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

  const content = dataJSON.storia as DataJSONType
  if (!content)
    return (
      <DefaultLayout>
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
      <MobileContentToComponent pageData={content} images={filteredImages} />
    </DefaultLayout>
  )
}

export default LaghettiStoriaPage

export const Head: HeadFC = () => <title>Laghetti della Rimonta - Storia</title>
