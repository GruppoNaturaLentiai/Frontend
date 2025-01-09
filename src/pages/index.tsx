import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"

const IndexPage: React.FC<PageProps> = () => {
  return <DefaultLayout> Questo è un testo </DefaultLayout>
}

export default IndexPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai</title>
