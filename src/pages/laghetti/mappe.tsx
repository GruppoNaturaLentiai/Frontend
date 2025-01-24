import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import dataJSON from "../../../content/laghetti/mappe.json"
import DefaultLayout from "../../components/default-layout"
import ContentToComponent from "../../components/pagedata-text-components"
import { DataJSONType, ImageData, Location } from "../../types"
import * as T from "./../../components/typography"
import MapComponent from "../../components/map"
import MobileContentToComponent from "../../components/mobile-pagedata-text-components"

const markersMap: Location[] = [
  {
    type: "start",
    name: "Inizio del percorso",
    lat: 46.04923742844764,
    lon: 12.02636613390803,
  },
  {
    type: "park",
    iconType: "park",
    name: "Parcheggio",
    lat: 46.046873575356855,
    lon: 12.024898230581327,
  },
]

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

  const content = dataJSON.mappe as DataJSONType
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
      <MapComponent markers={markersMap} />
    </DefaultLayout>
  )
}

export default LaghettiMappePage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
