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

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Partecipa!</title>
)
