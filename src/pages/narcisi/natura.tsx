import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import WorkInProgress from "../../components/work-in-progress"

const NarcisiNaturaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WorkInProgress />
    </DefaultLayout>
  )
}

export default NarcisiNaturaPage

import { SEO } from "../../components/seo"

export const Head: HeadFC = ({ location }) => (
  <SEO title="Progetto Narcisi - Natura" pathname={location.pathname} />
)
