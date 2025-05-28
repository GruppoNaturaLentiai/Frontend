import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import AccessWarnings from "../../components/access-warnings"
import DefaultLayout from "../../components/default-layout"
import MapComponent from "../../components/map-narcisi"
import paths from "../../data/paths/narcisi"
import { Location } from "../../types"

const markersMap: Location[] = [
  {
    type: "park",
    iconType: "park",
    name: "Parcheggio",
    lat: 46.00797704443462,
    lon: 12.022993713170376,
  },
  {
    type: "daffodil",
    iconType: "daffodil",
    name: "Fioritura dei narcisi",
    lat: 46.01073603970253,
    lon: 12.025127478790541,
  },
  {
    type: "daffodil",
    iconType: "daffodil",
    name: "Fioritura dei narcisi",
    lat: 46.006950306310024,
    lon: 12.023120915478003,
  },
  {
    type: "daffodil",
    iconType: "daffodil",
    name: "Fioritura dei narcisi",
    lat: 46.00330147743768,
    lon: 12.019027555533151,
  },
  {
    type: "daffodil",
    iconType: "daffodil",
    name: "Fioritura dei narcisi",
    lat: 45.997452061901924,
    lon: 12.01622871715491,
  },
  {
    type: "daffodil",
    iconType: "daffodil",
    name: "Fioritura dei narcisi",
    lat: 45.99111388253593,
    lon: 12.012709597534387,
  },
]

const NarcisiMappePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <AccessWarnings type="narcisi" />
      <MapComponent markers={markersMap} paths={paths} />
    </DefaultLayout>
  )
}

export default NarcisiMappePage

export const Head: HeadFC = () => <title>Progetto Narcisi - Mappe</title>
