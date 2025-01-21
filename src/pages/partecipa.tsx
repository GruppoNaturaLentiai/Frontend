import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"

const PartecipaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      Pagina per con i gadget, IBAN e wallet per donare online
    </DefaultLayout>
  )
}

export default PartecipaPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Partecipa!</title>
)
