import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"

const ChiSiamoPage: React.FC<PageProps> = () => {
  return <DefaultLayout>Pagina che spiega chi siamo</DefaultLayout>
}

export default ChiSiamoPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Chi siamo</title>
)
