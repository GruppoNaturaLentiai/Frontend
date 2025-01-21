import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const NarcisiPage: React.FC<PageProps> = () => {
  return <DefaultLayout> Pagina per con contenuti per i Narcisi </DefaultLayout>
}

export default NarcisiPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
