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
  maxWidth,
  noDescription,
  noCopyright,
  objectFit = "cover", // Default a "cover" per mantenere belle le foto
}: {
  title: string
  description: string
  alt: string
  image: IGatsbyImageData
  copyright: string | undefined
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  noDescription?: boolean
  noCopyright?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}) => (
  <S.ImgWrapper
    $maxHeight={maxHeight}
    $maxWidth={maxWidth}
    $minHeight={minHeight}
    $minWidth={minWidth}
  >
    {title && <T.H3 dangerouslySetInnerHTML={{ __html: title }} />}
    <GatsbyImage
      image={image}
      alt={alt}
      style={{
        borderRadius: "12px",
        marginTop: "1em",
        width: "100%",
        maxHeight: maxHeight ? `${maxHeight}px` : undefined, // RIMOSSO il "450px" forzato!
        boxShadow: "0 8px 24px rgba(44, 69, 34, 0.12)",
      }}
      imgStyle={{
        objectFit: objectFit, // Usiamo la prop dinamica
      }}
    />
    {noCopyright ? null : copyright ? (
      <T.P4>Foto di {copyright}</T.P4>
    ) : (
      <T.P4>Autore sconosciuto</T.P4>
    )}
    {!noDescription && (
      <S.ImageDescription
        style={{
          maxWidth: image.width,
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
  </S.ImgWrapper>
)

export default ImageWithCredits
