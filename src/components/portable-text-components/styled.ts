import styled from "styled-components"
import * as T from "../typography"

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
  max-width: "100%";
  height: "auto";
  display: "block";
  margin: "1em 0";
`

export const ImgDescription = styled(T.P4)`
  font-style: italic;
  text-align: center;
  margin-block-start: 0.5em;
`
