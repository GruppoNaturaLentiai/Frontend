import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import ContentToComponent from "../../components/pagedata-text-components"
import MobileContentToComponent from "../../components/mobile-pagedata-text-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { DataJSONType, ImageData } from "../../types"
import dataJSON from "../../../content/sociale/mobilità.json"
import * as T from "./../../components/typography"

const MobilitàSostenibilePage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["mobilità"] } }) {
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
              width: 1600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const content = dataJSON.mobilità as DataJSONType
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

  const mapUp = getImage(
    images.find(
      (img: any) => img.base === "anello-ciclopedonale-lentiai-00.jpeg",
    ).childImageSharp,
  )
  const mapDown = getImage(
    images.find(
      (img: any) => img.base === "anello-ciclopedonale-lentiai-01.jpeg",
    ).childImageSharp,
  )

  return (
    <DefaultLayout>
      <ContentToComponent pageData={content} images={filteredImages} />
      <MobileContentToComponent pageData={content} images={filteredImages} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "2em",
          gap: "2em",
        }}
      >
        {mapUp && (
          <GatsbyImage
            image={mapUp}
            alt={
              "Informazioni utili dell'anello Ciclopedonale di Lentiai Fronte"
            }
            style={{ borderRadius: "8px", marginTop: 4, maxWidth: 1600 }}
          />
        )}
        {mapDown && (
          <GatsbyImage
            image={mapDown}
            alt={"Cartina dell'anello Ciclopedonale di Lentiai"}
            style={{ borderRadius: "8px", marginTop: 4, maxWidth: 1600 }}
          />
        )}
      </div>
    </DefaultLayout>
  )
}

export default MobilitàSostenibilePage

import { SEO } from "../../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Gruppo Natura Lentiai - Mobilità sostenibile"
    pathname={location.pathname}
  />
)
