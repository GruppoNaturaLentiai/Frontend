import React from "react"
import {
  ImageContentData,
  ImageData,
  TextContentData
} from "../../types"
import ImageWithCredits from "../image-with-credits"
import * as T from "../typography"
import * as S from "./styled"

const ContinueReading = <S.ContinueReading>Continua a leggere</S.ContinueReading>

export const renderImage = (content: ImageContentData, images: ImageData[], key: string) => {
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
            />
          )
        ) : (
          <T.H2 key={`img-${index}`}>Image not found</T.H2>
        )
      )}
    </S.ImageWrapper>
  )
}


export const renderText = (content: TextContentData, key: string, setExpandText: React.Dispatch<React.SetStateAction<string>>, expandText: string) => {
  let theText = content.content.join(" <br /> ")
  if (!theText) return <T.H2 key={key}>Text not found</T.H2>

  const isExpanded = key === expandText
  const onClickFn = () => {
    if (key === expandText) setExpandText("")
    else setExpandText(key)
  }


  const { font, position } = content
  switch (content.size) {
    case "h1":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H1
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "h2":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H2
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "h3":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H3
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "h4":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H4
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "h5":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H5
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "h6":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H6
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "h7":
      return (
        <div onClick={onClickFn} key={key}>
          <T.H7
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "p1":
      return (
        <div onClick={onClickFn} key={key}>
          <T.P1
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "p2":
      return (
        <div onClick={onClickFn} key={key}>
          <T.P2
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "p3":
      return (
        <S.TextWrapper $isExpanded={isExpanded}>
          <S.TextContainer onClick={onClickFn} key={key}>
            <T.P3
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} />
        </S.TextWrapper>
      )
    case "p4":
      return (
        <div onClick={onClickFn} key={key}>
          <T.P4
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "p5":
      return (
        <div onClick={onClickFn} key={key}>
          <T.P5
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    case "note":
      return (
        <div onClick={onClickFn} key={key}>
          <T.Notes
            $textAlign={position}
            $font={font}
            dangerouslySetInnerHTML={{ __html: theText }}
          />
        </div>
      )
    default:
      return <T.H2 key={key}>Text size not found</T.H2>
  }
}