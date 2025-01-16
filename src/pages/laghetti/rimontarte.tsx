import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const LaghettiRimontartePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      RIMONTARTE + Pagina per con contenuti per i laghetti della Rimonta
    </DefaultLayout>
  )
}

export default LaghettiRimontartePage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Laghetti della Rimonta</title>
)
