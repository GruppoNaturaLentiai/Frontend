import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import Component404 from "../components/404"

const IndexPage: React.FC<PageProps> = () => {
  return <DefaultLayout>
    <Component404 />
  </DefaultLayout>
}

export default IndexPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai</title>
