import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const NarcisiMappePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      {" "}
      MAPPE + Pagina per con contenuti per i Narcisi{" "}
    </DefaultLayout>
  )
}

export default NarcisiMappePage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
