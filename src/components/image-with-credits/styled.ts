import styled from "styled-components"
import * as T from "./../typography"

export const ImgWrapper = styled.div<{
  $maxWidth?: number
  $maxHeight?: number
  $minWidth?: number
  $minHeight?: number
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Fa partire gli elementi dall'alto verso il basso */
  text-align: center;
  width: 100%;
  ${({ $maxWidth }) => ($maxWidth ? `max-width: ${$maxWidth}px;` : "")}
  ${({ $maxHeight }) => ($maxHeight ? `max-height: ${$maxHeight}px;` : "")}
  ${({ $minWidth }) => ($minWidth ? `min-width: ${$minWidth}px;` : "")}
  ${({ $minHeight }) => ($minHeight ? `min-height: ${$minHeight}px;` : "")}
`

export const ImageDescription = styled(T.P3)`
  white-space: break-spaces;
  margin-top: 0.5em;
`