import {
  DataJSONType,
  ImageContentData,
  ImageData,
  TemplateTwoColumnsData,
  TextContentData,
} from "../../types"
import ImageWithCredits from "../image-with-credits"
import * as S from "./styled"
import * as T from "./../typography"
import React, { Fragment } from "react"

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

export const renderComponents =
  (images: ImageData[]) =>
  (content: DataJSONType[number], key: Number | string): any => {
    const keyString = key.toString()

    switch (content.type) {
      case "image":
        const castedImgContent = content as ImageContentData
        const filteredImages = castedImgContent.content.map(imgFilename =>
          images.find(img => img.fileName === imgFilename),
        )
        return (
          <S.ImageWrapper key={keyString}>
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
      case "text":
        const castedTextContent = content as TextContentData
        const theText = castedTextContent.content.join(" <br /> ")
        if (!theText) return <T.H2 key={keyString}>Text not found</T.H2>

        const { font, position, size } = castedTextContent
        const textRenderer = renderTextInner(size, font, position)
        return <Fragment key={keyString}>{textRenderer(theText)}</Fragment>

      case "two-columns": {
        const castedTwoColsComponent = content as TemplateTwoColumnsData
        const [leftComponents, rightComponents] = castedTwoColsComponent.content
        return (
          <S.TwoColsWrapper key={keyString}>
            <S.LeftTwoColsWrapper>
              {leftComponents.map((lc, idx) =>
                renderComponents(images)(lc, `two-cols-left-${idx}`),
              )}
            </S.LeftTwoColsWrapper>
            <S.RightTwoColsWrapper>
              {rightComponents.map((lc, idx) =>
                renderComponents(images)(lc, `two-cols-right-${idx}`),
              )}
            </S.RightTwoColsWrapper>
          </S.TwoColsWrapper>
        )
      }
      default:
        return <T.H1 key={keyString}>Content type Not Found</T.H1>
    }
  }
