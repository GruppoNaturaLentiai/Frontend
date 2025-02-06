import React from "react"
import { ImageContentData, ImageData, TextContentData } from "../../types"
import ImageWithCredits from "../image-with-credits"
import * as T from "../typography"
import * as S from "./styled"

export const renderImage = (
  content: ImageContentData,
  images: ImageData[],
  key: string,
) => {
  const filteredImages = content.content.map(imgFilename =>
    images.find(img => img.fileName === imgFilename),
  )
  return (
    <S.ImageWrapper key={key}>
      {filteredImages.map((img, index) =>
        img ? (
          img.image && (
            <ImageWithCredits
              key={index}
              title={img.title}
              description={img.description}
              alt={img.alt || img.description}
              image={img.image}
              copyright={img.copyright}
              minHeight={content.minHeight}
              minWidth={content.minWidth}
              maxHeight={content.maxHeight}
              maxWidth={content.maxWidth}
              noDescription={content.noDescription}
              noCopyright={content.noCopyright}
            />
          )
        ) : (
          <T.H2 key={`img-${index}`}>Image not found</T.H2>
        ),
      )}
    </S.ImageWrapper>
  )
}

const renderTextInner =
  (
    size: string,
    font: T.FontFamilies | undefined,
    position: "center" | "left" | "right" | undefined,
  ) =>
  (text: string) => {
    switch (size) {
      case "h1":
        return (
          <T.H1
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "h2":
        return (
          <T.H2
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "h3":
        return (
          <T.H3
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "h4":
        return (
          <T.H4
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "h5":
        return (
          <T.H5
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "h6":
        return (
          <T.H6
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "h7":
        return (
          <T.H7
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "p1":
        return (
          <T.P1
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "p2":
        return (
          <T.P2
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "p3":
        return (
          <T.P3
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "p4":
        return (
          <T.P1
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "p5":
        return (
          <T.P1
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      case "note":
        return (
          <T.Notes
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )
      default:
        return <T.H2>Text size not found</T.H2>
    }
  }

export const renderText = (
  content: TextContentData,
  key: string,
  setExpandText: React.Dispatch<React.SetStateAction<string>>,
  expandText: string,
) => {
  const theText = content.content.join(" <br /> ")
  if (!theText) return <T.H2 key={key}>Text not found</T.H2>

  const isExpanded = key === expandText
  const onClickFn = () => {
    if (key === expandText) setExpandText("")
    else setExpandText(key)
  }

  const isShortText = theText.length <= 135

  const { font, position, collapsible } = content
  const textRenderer = renderTextInner(content.size, font, position)

  if (collapsible === false)
    return <React.Fragment key={key}>{textRenderer(theText)}</React.Fragment>

  return (
    <S.TextWrapper $isExpanded={isExpanded} key={key}>
      <S.TextContainer onClick={onClickFn}>
        {textRenderer(theText)}
      </S.TextContainer>
      <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
      <S.ReadMoreWrapper
        $isExpanded={isExpanded}
        $isShort={isShortText}
        onClick={onClickFn}
      >
        <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
          {isExpanded ? "Chiudi" : "Leggi di più"}
        </T.H3>
      </S.ReadMoreWrapper>
    </S.TextWrapper>
  )
}
