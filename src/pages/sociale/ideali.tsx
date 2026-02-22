import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import WorkInProgress from "../../components/work-in-progress"

const NostriIdealiPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WorkInProgress />
    </DefaultLayout>
  )
}

export default NostriIdealiPage

import { SEO } from "../../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Gruppo Natura Lentiai - I nostri Ideali"
    pathname={location.pathname}
  />
)
