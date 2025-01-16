import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const LaghettiPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      Pagina per con contenuti per i laghetti della Rimonta
    </DefaultLayout>
  )
}

export default LaghettiPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
