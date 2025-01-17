import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as React from "react"
import * as T from "./../typography"
import * as S from "./styled"

const ImageWithCredits = ({
  title,
  description,
  alt,
  image,
  copyright,
}: {
  title: string
  description: string
  alt: string
  image: IGatsbyImageData
  copyright: string | undefined
}) => (
  <S.ImgWrapper>
    <T.H3>{title}</T.H3>
    <GatsbyImage
      image={image}
      alt={alt}
      style={{ borderRadius: "8px", marginTop: 4 }}
    />
    {copyright ? (
      <T.P4>Foto di {copyright}</T.P4>
    ) : (
      <T.P4>Autore sconosciuto</T.P4>
    )}
    <T.P2>{description}</T.P2>
  </S.ImgWrapper>
)

export default ImageWithCredits
