import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import dataJSON from "../../content/chi-siamo.json"
import DefaultLayout from "../components/default-layout"
import MobileContentToComponent from "../components/mobile-pagedata-text-components"
import ContentToComponent from "../components/pagedata-text-components"
import { DataJSONType } from "../types"
import * as T from "./../components/typography"

const ChiSiamoPage: React.FC<PageProps> = () => {
  const content = dataJSON["chi-siamo"] as DataJSONType
  if (!content)
    return (
      <DefaultLayout>
        <T.H1>Contenuto non trovato!</T.H1>
      </DefaultLayout>
    )

  return (
    <DefaultLayout>
      <ContentToComponent pageData={content} images={[]} />
      <MobileContentToComponent pageData={content} images={[]} />
    </DefaultLayout>
  )
}

export default ChiSiamoPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Chi siamo</title>
)
