import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const NarcisiProgettoPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      {" "}
      PROGETTO + Pagina per con contenuti per i Narcisi{" "}
    </DefaultLayout>
  )
}

export default NarcisiProgettoPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
