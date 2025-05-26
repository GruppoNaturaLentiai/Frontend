import { IGatsbyImageData } from "gatsby-plugin-image"
import * as T from "../components/typography"

export type ImageData = {
  fileName: string
  title: string
  description: string
  image: IGatsbyImageData | undefined
  copyright: string | undefined
  alt: string | undefined
}

export type ImageContentData = {
  type: "image"
  content: string[]
  maxWidth?: number
  maxHeight?: number
  minWidth?: number
  minHeight?: number
  noDescription?: boolean
  noCopyright?: boolean
}

export type TextContentData = {
  type: "text"
  position?: "left" | "right" | "center"
  content: [string]
  size:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "p1"
    | "p2"
    | "p3"
    | "p4"
    | "p5"
    | "note"
  font?: T.FontFamilies
  collapsible?: boolean
}

export type TemplateTwoColumnsData = {
  type: "two-columns"
  content: [
    (ImageContentData | TextContentData)[],
    (ImageContentData | TextContentData)[],
  ]
}

export type DataJSONType = (
  | ImageContentData
  | TextContentData
  | TemplateTwoColumnsData
)[]

export type Location = {
  iconType?: "default" | "park" | "daffodil"
  name: string
  lat: number
  lon: number
  type: string
}
