import { IGatsbyImageData } from "gatsby-plugin-image"

export type ImageData = {
  fileName: string
  title: string
  description: string
  image: IGatsbyImageData | undefined
  copyright: string | undefined
  alt: string | undefined
}
