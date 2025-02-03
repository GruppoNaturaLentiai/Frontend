import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import DefaultLayout from "../components/default-layout"
import HeroMain from "../components/hero-main"
import { ImageData } from "../types"


const content = {
  quote: "“Il Creato non è una proprietà di cui possiamo spadroneggiare a nostro piacimento; né, tanto meno, è una proprietà solo di alcuni, di pochi: il Creato è un dono, un dono meraviglioso che Dio ci ha dato perché ne abbiamo cura e lo utilizziamo a beneficio di tutti, sempre con grande rispetto e gratitudine.”",
  signature: "Papa Francesco <span style=\"font-family: Caveat\"> XVI </span>"
}

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageMetadataJson(filter: { tags: { in: ["main"] } }) {
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
  const coverImage = filteredImages.find(img => img.fileName === "Fioritura02.jpg")

  return (
    <DefaultLayout>
      {coverImage && <HeroMain
        content={content}
        img={coverImage}
      />}
    </DefaultLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai</title>
