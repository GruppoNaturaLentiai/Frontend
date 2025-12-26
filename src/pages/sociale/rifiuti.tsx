import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import WorkInProgress from "../../components/work-in-progress"

const RifiutiPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WorkInProgress />
    </DefaultLayout>
  )
}

export default RifiutiPage

import { SEO } from "../../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO title="Gruppo Natura Lentiai - Rifiuti" pathname={location.pathname} />
)
