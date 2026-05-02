import styled from "styled-components"
import * as T from "../typography"
import { breakpoint, breakpointNum } from "../../styles"

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
  /* Su desktop, forziamo un'altezza unica per allineare tutto! */
  height: 400px;
  width: 100%; /* L'immagine riempie la sua colonna (es. 48% su desktop) */

  /* --- IL SEGRETO VISUALE: Le immagini non si distorcono ma si tagliano --- */
  object-fit: cover;

  display: block;
  margin: 1.5em 0;
  border-radius: 8px;

  /* (Rimosse tutte le PERCENTUALI DI MAX-WIDTH: ora ci pensa il layout Flexbox!) */

  @media (max-width: ${breakpoint.tablet}) {
    height: auto; /* Su mobile torniamo all'altezza automatica */
    max-height: 400px; /* Non facciamo impazzire le foto verticali */
  }
`

export const ImgDescription = styled(T.P4)`
  font-style: italic;
  text-align: center;
  margin-block-start: 0.5em;
`
