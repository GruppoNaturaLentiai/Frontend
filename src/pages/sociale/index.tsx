import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import DefaultLayout from "../../components/default-layout"

const SocialePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      {" "}
      Pagina per con contenuti per il sociale: giornate ecologiche, FIAB, ecc{" "}
    </DefaultLayout>
  )
}

export default SocialePage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Sociale</title>
