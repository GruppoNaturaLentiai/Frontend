import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import Component404 from "../components/404"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <Component404 />
    </DefaultLayout>
  )
}

export default IndexPage

import { SEO } from "../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO title="Gruppo Natura Lentiai - 404" pathname={location.pathname} />
)
