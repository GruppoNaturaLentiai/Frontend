import styled from "styled-components"
import * as T from "../typography"
import { breakpointNum } from "../../styles"

export const ImageWrapper = styled.div<{
  $position?: "left" | "right" | "center"
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $position }) => {
    switch ($position) {
      case "left":
        return "flex-start"
      case "right":
        return "flex-end"
      default:
        return "center"
    }
  }};
  text-align: ${({ $position }) =>
    $position === "center" ? "center" : "inherit"};
`

export const ResponsiveImg = styled.img`
  height: auto;
  display: block;
  margin: 1em 0;
  max-width: 50%;
  object-fit: contain;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    max-width: 80%;
  }
  @media (max-width: ${breakpointNum.smalltablet}px) {
    max-width: 100%;
  }
`

export const ImgDescription = styled(T.P4)`
  font-style: italic;
  text-align: center;
  margin-block-start: 0.5em;
`
