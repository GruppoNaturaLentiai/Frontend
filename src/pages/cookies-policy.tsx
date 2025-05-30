import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import DefaultLayout from "../components/default-layout"
import { DataJSONType } from "../types"
import dataJSON from "../../content/cookies-policy.json"
import ContentToComponent from "../components/pagedata-text-components"
import MobileContentToComponent from "../components/mobile-pagedata-text-components"
import * as T from "../components/typography"

const CookiesPolicyPage: React.FC<PageProps> = () => {
  const content = dataJSON["cookies-policy"] as DataJSONType
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

export default CookiesPolicyPage

export const Head: HeadFC = () => (
  <title>Gruppo Natura Lentiai - Politica sui cookie</title>
)
