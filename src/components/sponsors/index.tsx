import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as S from "./styled"

const sponsorsBase = [
  {
    name: 'AUSER Lentiai "Il Narciso"',
    fileName: "auser.png",
    url: "https://www.auser.veneto.it/belluno-alnarciso/dove-siamo.html",
  },
  {
    name: "Unifarco",
    fileName: "unifarco.png",
    url: "https://www.unifarco.it/",
  },
  {
    name: "Geometrie D'Arredo",
    fileName: "geometrie-d-arredo.png",
    url: "https://www.geometriedarredo.it/",
  },
  {
    name: "FPB Cassa di Fassa Primiero Belluno",
    fileName: "fpb-cassa.png",
    url: "https://www.fpbcassa.it/",
  },
  {
    name: "Farmacia Dr. A. Zampol",
    fileName: "farmacia-zampol.png",
    url: "https://www.farmaciedelpiave.it/farmacia-zampol-d-ortia.php",
  },
  {
    name: "Bon Tajer",
    fileName: "bon-tajer.png",
    url: "https://bontajer.it/",
  },
  {
    name: "Offredi Ofsolar",
    fileName: "offredi.png",
    url: "https://www.offrediofsolar.it/",
  },
  {
    name: "Supermercati Walber",
    fileName: "superw.png",
    url: "https://www.walber.it/punto-vendita/lentiai",
  },
  {
    name: "Dolomiti Canapa",
    fileName: "dolomiti-canapa.png",
    url: "https://www.dolomiticanapa.com/",
  },
]

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          extension: { in: ["png", "jpg", "jpeg", "webp"] }
        }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes

  return (
    <S.SponsorGrid>
      {sponsorsBase.map((sponsor, idx) => {
        const imgNode = images.find((img: any) => img.base === sponsor.fileName)
        const gatsbyImg = imgNode ? getImage(imgNode.childImageSharp) : null

        return (
          <a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            title={sponsor.name}
            key={`sponsor-${idx}`}
          >
            <S.Sponsor>
              {gatsbyImg && (
                <GatsbyImage
                  image={gatsbyImg}
                  alt={sponsor.name}
                  objectFit="contain"
                  style={{ maxHeight: "50px", maxWidth: "120px" }}
                />
              )}
            </S.Sponsor>
          </a>
        )
      })}
    </S.SponsorGrid>
  )
}

export default Sponsors
