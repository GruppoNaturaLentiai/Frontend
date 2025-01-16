import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const LaghettiStoriaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      STORIA + Pagina per con contenuti per i laghetti della Rimonta
    </DefaultLayout>
  )
}

export default LaghettiStoriaPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
