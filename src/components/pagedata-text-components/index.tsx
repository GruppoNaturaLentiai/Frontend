import React from "react"
import { ImageData } from "../../types"
import ImageWithCredits from "../image-with-credits"
import * as T from "./../typography"
import * as S from "./styled"

type ImageContentData = {
  type: "image"
  content: string[]
}

type TextContentData = {
  type: "text"
  content: [string]
  size:
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5"
  | "note"
  font?: T.FontFamilies
}

const ContentToComponent: React.FC<{
  pageData: (ImageContentData | TextContentData)[]
  images: ImageData[]
}> = ({ pageData, images }) => (
  <S.MainWrapper>
    {pageData.map((content, key) => {
      switch (content.type) {
        case "image":
          const castedImgContent = content as ImageContentData
          const filteredImages = castedImgContent.content.map(imgFilename =>
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
          const theText = castedTextContent.content[0]
          if (!theText) return <T.H2 key={key}>Text not found</T.H2>

          const { font } = castedTextContent
          switch (castedTextContent.size) {
            case "h1":
              return (
                <T.H1 key={key} font={font}>
                  {theText}
                </T.H1>
              )
            case "h2":
              return (
                <T.H2 key={key} font={font}>
                  {theText}
                </T.H2>
              )
            case "h3":
              return (
                <T.H3 key={key} font={font}>
                  {theText}
                </T.H3>
              )
            case "h4":
              return (
                <T.H4 key={key} font={font}>
                  {theText}
                </T.H4>
              )
            case "h5":
              return (
                <T.H5 key={key} font={font}>
                  {theText}
                </T.H5>
              )
            case "h6":
              return (
                <T.H6 key={key} font={font}>
                  {theText}
                </T.H6>
              )
            case "h7":
              return (
                <T.H7 key={key} font={font}>
                  {theText}
                </T.H7>
              )
            case "p1":
              return (
                <T.P1 key={key} font={font} dangerouslySetInnerHTML={{ __html: theText }} />
              )
            case "p2":
              return (
                <T.P2 key={key} font={font} dangerouslySetInnerHTML={{ __html: theText }} />

              )
            case "p3":
              return (
                <T.P3 key={key} font={font} dangerouslySetInnerHTML={{ __html: theText }} />
              )
            case "p4":
              return (
                <T.P4 key={key} font={font} dangerouslySetInnerHTML={{ __html: theText }} />
              )
            case "p5":
              return (
                <T.P5 key={key} font={font} dangerouslySetInnerHTML={{ __html: theText }} />
              )
            case "note":
              return <T.Notes key={key} font={font} dangerouslySetInnerHTML={{ __html: theText }} />
            default:
              return <T.H2 key={key}>Text size not found</T.H2>
          }
        default:
          return <T.H1 key={key}>Content type Not Found</T.H1>
      }
    })}
  </S.MainWrapper>
)

export default ContentToComponent
