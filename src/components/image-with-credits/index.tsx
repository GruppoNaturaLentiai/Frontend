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
  minHeight,
  minWidth,
  maxHeight,
  maxWidth
}: {
  title: string
  description: string
  alt: string
  image: IGatsbyImageData
  copyright: string | undefined
  minWidth?: number
  minHeight?: number
  maxWidth?: number,
  maxHeight?: number
}) => (
  <S.ImgWrapper $maxHeight={maxHeight} $maxWidth={maxWidth} $minHeight={minHeight} $minWidth={minWidth}>
    <T.H3 dangerouslySetInnerHTML={{ __html: title }} />
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
    <S.ImageDescription style={{
      maxWidth: image.width
    }}
      dangerouslySetInnerHTML={{ __html: description }} />
  </S.ImgWrapper>
)

export default ImageWithCredits
