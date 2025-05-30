import React from "react"

import * as S from "./styled"

import auser from "../../logos/auser.png"
import geometrie from "../../logos/geometrie-d-arredo.png"
import offredi from "../../logos/offredi.png"
import farmacia from "../../logos/farmacia-zampol.png"
import unifarco from "../../logos/unifarco.png"
import walber from "../../logos/superw.png"
import fpb from "../../logos/fpb-cassa.png"
import dolomitiCanapa from "../../logos/dolomiti-canapa.png"
import bonTajer from "../../logos/bon-tajer.png"

const sponsors = [
  {
    name: 'AUSER Lentiai "Il Narciso"',
    logo: auser,
    url: "https://www.auser.veneto.it/belluno-alnarciso/dove-siamo.html",
  },
  {
    name: "Unifarco",
    logo: unifarco,
    url: "https://www.unifarco.it/",
  },
  {
    name: "Geometrie D'Arredo",
    logo: geometrie,
    url: "https://www.geometriedarredo.it/",
  },
  {
    name: "FPB Cassa di Fassa Primiero Belluno",
    logo: fpb,
    url: "https://www.fpbcassa.it/",
  },
  {
    name: "Farmacia Dr. A. Zampol",
    logo: farmacia,
    url: "https://www.farmaciedelpiave.it/farmacia-zampol-d-ortia.php",
  },
  {
    name: "Bon Tajer",
    logo: bonTajer,
    url: "https://bontajer.it/",
  },
  {
    name: "Offredi Ofsolar",
    logo: offredi,
    url: "https://www.offrediofsolar.it/",
  },
  {
    name: "Supermercati Walber",
    logo: walber,
    url: "https://www.walber.it/punto-vendita/lentiai",
  },
  {
    name: "Dolomiti Canapa",
    logo: dolomitiCanapa,
    url: "https://www.dolomiticanapa.com/",
  },
]

const Sponsors = () => {
  return (
    <S.SponsorGrid>
      {sponsors.map((sponsor, idx) => (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          title={sponsor.name}
          key={`sponsor-${idx}`}
        >
          <S.Sponsor>
            <img src={sponsor.logo} alt={sponsor.name} />
          </S.Sponsor>
        </a>
      ))}
    </S.SponsorGrid>
  )
}

export default Sponsors
