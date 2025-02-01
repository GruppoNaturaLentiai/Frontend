import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import { DataJSONType, ImageData } from "../../types"
import ContentToComponent from "../../components/pagedata-text-components"
import dataJSON from "../../../content/laghetti/index.json"
import * as T from "./../../components/typography"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MobileContentToComponent from "../../components/mobile-pagedata-text-components"

const LaghettiPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["laghetti-main"] } }) {
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
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const content = dataJSON.index as DataJSONType
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
  const coverUp = getImage(
    images.find((img: any) => img.base === "rimonta-cover-01.jpg")
      .childImageSharp,
  )
  const coverDown = getImage(
    images.find((img: any) => img.base === "rimonta-cover-02.jpg")
      .childImageSharp,
  )

  return (
    <DefaultLayout>
      <div style={{ padding: 16 }}>
        <div style={{ justifySelf: "center" }}>
          {coverUp && (
            <GatsbyImage
              image={coverUp}
              alt={"Una passerella in legno con dietro il torrente Rimonta"}
              style={{ borderRadius: "8px", marginTop: 4, maxWidth: 1200 }}
            />
          )}
          <T.P4 $textAlign="center">Foto di Walter Argenta</T.P4>
        </div>
        <ContentToComponent pageData={content} images={filteredImages} />
        <MobileContentToComponent pageData={content} images={filteredImages} />
        <div style={{ justifySelf: "center" }}>
          {coverDown && (
            <GatsbyImage
              image={coverDown}
              alt={"Un panorama invernale dei laghetti della Rimonta"}
              style={{ borderRadius: "8px", marginTop: 4, maxWidth: 1200 }}
            />
          )}
          <T.P4 $textAlign="center">Foto di Walter Argenta</T.P4>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default LaghettiPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
