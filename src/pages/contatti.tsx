import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"

const ContactPage: React.FC<PageProps> = () => {
  return <DefaultLayout> Pagina per contattarci </DefaultLayout>
}

export default ContactPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Contattaci</title>
)
