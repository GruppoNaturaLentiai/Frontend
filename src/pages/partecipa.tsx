import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import DefaultLayout from "../components/default-layout"
import SustainUs from "../components/sustain-us"

const PartecipaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <SustainUs />
    </DefaultLayout>
  )
}

export default PartecipaPage

import { SEO } from "../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Gruppo Natura Lentiai - Partecipa!"
    pathname={location.pathname}
  />
)
