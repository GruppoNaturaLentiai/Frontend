import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const NarcisiNaturaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      {" "}
      NATURA + Pagina per con contenuti per i Narcisi{" "}
    </DefaultLayout>
  )
}

export default NarcisiNaturaPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
