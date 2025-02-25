import React, { useRef, useState } from "react"
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
    const addProps = {
      $textAlign: position,
      $font: font,
      dangerouslySetInnerHTML: { __html: text },
    }
    switch (size) {
      case "h1":
        return <T.H1 {...addProps} />
      case "h2":
        return <T.H2 {...addProps} />
      case "h3":
        return <T.H3 {...addProps} />
      case "h4":
        return <T.H4 {...addProps} />
      case "h5":
        return <T.H5 {...addProps} />
      case "h6":
        return <T.H6 {...addProps} />
      case "h7":
        return <T.H7 {...addProps} />
      case "p1":
        return <T.P1 {...addProps} />
      case "p2":
        return <T.P2 {...addProps} />
      case "p3":
        return <T.P3 {...addProps} />
      case "p4":
        return <T.P1 {...addProps} />
      case "p5":
        return <T.P1 {...addProps} />
      case "note":
        return <T.Notes {...addProps} />
      default:
        return <T.H2>Text size not found</T.H2>
    }
  }

export const ExpandableText: React.FC<{
  content: TextContentData
  innerKey: string
}> = ({ content, innerKey }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const theText = content.content.join(" <br /> ")
  if (!theText) return <T.H2 key={innerKey}>Text not found</T.H2>

  const textRef = useRef<HTMLDivElement | null>(null)

  const isShortText = theText.length <= 135

  const { font, position, collapsible } = content
  const textRenderer = renderTextInner(content.size, font, position)

  if (collapsible === false)
    return (
      <React.Fragment key={innerKey}>{textRenderer(theText)}</React.Fragment>
    )

  return (
    <S.TextWrapper $isExpanded={isExpanded} key={innerKey} ref={textRef}>
      <S.TextContainer
        onClick={() => {
          setIsExpanded(true)
        }}
      >
        {textRenderer(theText)}
      </S.TextContainer>
      <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
      <S.ReadMoreWrapper
        $isExpanded={isExpanded}
        $isShort={isShortText}
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
          {isExpanded ? "Chiudi" : "Leggi di più"}
        </T.H3>
      </S.ReadMoreWrapper>
    </S.TextWrapper>
  )
}
