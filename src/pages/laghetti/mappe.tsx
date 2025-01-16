import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const LaghettiMappePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      MAPPE + Pagina per con contenuti per i laghetti della Rimonta
    </DefaultLayout>
  )
}

export default LaghettiMappePage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
