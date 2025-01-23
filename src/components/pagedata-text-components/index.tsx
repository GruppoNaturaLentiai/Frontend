import React from "react"
import { DataJSONType, ImageData } from "../../types"
import { renderComponents } from "./helpers"
import * as S from "./styled"

const ContentToComponent: React.FC<{
  pageData: DataJSONType
  images: ImageData[]
}> = ({ pageData, images }) => (
  <S.MainWrapper>{pageData.map(renderComponents(images))}</S.MainWrapper>
)

export default ContentToComponent
