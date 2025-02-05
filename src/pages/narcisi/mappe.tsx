import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import AccessWarnings from "../../components/access-warnings"
import DefaultLayout from "../../components/default-layout"

const NarcisiMappePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <AccessWarnings type="narcisi" />
    </DefaultLayout>
  )
}

export default NarcisiMappePage

export const Head: HeadFC = () => <title>Progetto Narcisi - Mappe</title>
