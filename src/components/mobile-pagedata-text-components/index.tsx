import React, { useState } from "react"
import {
  DataJSONType,
  ImageContentData,
  ImageData,
  TemplateTwoColumnsData,
  TextContentData,
} from "../../types"
import * as T from "./../typography"
import { renderImage, renderText } from "./helpers"
import * as S from "./styled"

const renderComponents =
  (
    images: ImageData[],
    setExpandText: React.Dispatch<React.SetStateAction<any>>,
    expandText: any,
  ) =>
  (content: DataJSONType[number], key: Number | string): any => {
    const keyString = key.toString()
    switch (content.type) {
      case "image":
        const castedImgContent = content as ImageContentData
        return renderImage(castedImgContent, images, keyString)

      case "text":
        const castedTextContent = content as TextContentData
        return renderText(
          castedTextContent,
          keyString,
          setExpandText,
          expandText,
        )

      case "two-columns": {
        const castedTwoColsComponent = content as TemplateTwoColumnsData
        const [leftComponents, rightComponents] = castedTwoColsComponent.content

        const mobileTexts = [...leftComponents, ...rightComponents].filter(
          ({ type }) => type === "text",
        )

        const mobileImages = [...leftComponents, ...rightComponents].filter(
          ({ type }) => type === "image",
        )
        return (
          <S.TwoWrapperMobile key={keyString}>
            {[...mobileImages, ...mobileTexts].map((lc, idx) =>
              renderComponents(
                images,
                setExpandText,
                expandText,
              )(lc, `two-cols-seq-${keyString}-${idx}`),
            )}
          </S.TwoWrapperMobile>
        )
      }
      default:
        return <T.H1 key={keyString}>Content type Not Found</T.H1>
    }
  }

const MobileContentToComponent: React.FC<{
  pageData: DataJSONType
  images: ImageData[]
}> = ({ pageData, images }) => {
  const [expandText, setExpandText] = useState("")
  return (
    <S.MainWrapper>
      {pageData.map(renderComponents(images, setExpandText, expandText))}
    </S.MainWrapper>
  )
}
export default MobileContentToComponent
