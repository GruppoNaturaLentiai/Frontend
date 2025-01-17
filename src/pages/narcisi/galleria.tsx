import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const NarcisiGalleriaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      {" "}
      GALLERIA + Pagina per con contenuti per i Narcisi{" "}
    </DefaultLayout>
  )
}

export default NarcisiGalleriaPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
