import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const NarcisiStoriaPage: React.FC<PageProps> = () => {
  return <DefaultLayout> STORIA + Pagina per con contenuti per i Narcisi </DefaultLayout>
}

export default NarcisiStoriaPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
