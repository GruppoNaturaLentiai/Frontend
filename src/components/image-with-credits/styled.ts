import styled from "styled-components"
import * as T from "./../typography"

export const ImgWrapper = styled.div<{
  $maxWidth?: number
  $maxHeight?: number
  $minWidth?: number
  $minHeight?: number
}>`
  text-align: center;
  ${({ $maxWidth }) => ($maxWidth ? `max-width: ${$maxWidth}px;` : "")}
  ${({ $maxHeight }) => ($maxHeight ? `max-width: ${$maxHeight}px;` : "")}
  ${({ $minWidth }) => ($minWidth ? `min-width: ${$minWidth}px;` : "")}
  ${({ $minHeight }) => ($minHeight ? `min-width: ${$minHeight}px;` : "")}
`

export const ImageDescription = styled(T.P3)`
  white-space: break-spaces;
`
