import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import DefaultLayout from "../../components/default-layout"
import WorkInProgress from "../../components/work-in-progress"

const NarcisiGalleriaPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WorkInProgress />
    </DefaultLayout>
  )
}

export default NarcisiGalleriaPage

export const Head: HeadFC = () => <title>Gruppo Natura Lentiai - Narcisi</title>
