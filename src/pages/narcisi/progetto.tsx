import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"
import dataJSON from "../../../content/narcisi/progetto.json"
import { DataJSONType } from "../../types"
import * as T from "./../../components/typography"
import ContentToComponent from "../../components/pagedata-text-components"
import MobileContentToComponent from "../../components/mobile-pagedata-text-components"

const NarcisiProgettoPage: React.FC<PageProps> = () => {

  const content = dataJSON.progetto as DataJSONType
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

export default NarcisiProgettoPage

export const Head: HeadFC = () => <title>Progetto Narcisi - Progetto</title>
