import React, { useState } from "react"
import {
  DataJSONType,
  ImageContentData,
  ImageData,
  TemplateTwoColumnsData,
  TextContentData,
} from "../../types"
import * as T from "./../typography"
import { renderImage, ExpandableText } from "./helpers"
import * as S from "./styled"

const renderComponents =
  (images: ImageData[]) =>
  (content: DataJSONType[number], key: Number | string): any => {
    const keyString = key.toString()
    switch (content.type) {
      case "image":
        const castedImgContent = content as ImageContentData
        return renderImage(castedImgContent, images, keyString)

      case "text":
        const castedTextContent = content as TextContentData
        return (
          <ExpandableText
            key={`expandable-${keyString}`}
            content={castedTextContent}
            innerKey={keyString}
          />
        )

      case "two-columns": {
        const castedTwoColsComponent = content as TemplateTwoColumnsData
        const [leftComponents, rightComponents] = castedTwoColsComponent.content
        return (
          <S.TwoWrapperMobile key={keyString}>
            {[...leftComponents, ...rightComponents].map((lc, idx) =>
              renderComponents(images)(lc, `two-cols-seq-${keyString}-${idx}`),
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
  return <S.MainWrapper>{pageData.map(renderComponents(images))}</S.MainWrapper>
}
export default MobileContentToComponent
