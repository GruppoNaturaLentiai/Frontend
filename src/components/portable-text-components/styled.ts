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
  /* 1. IL FIX: Limite massimo in altezza e larghezza automatica proporzionale */
  max-height: 450px; 
  width: auto; 
  
  /* 2. Le tue ottime regole di larghezza massima */
  max-width: 50%;
  
  display: block;
  margin: 1.5em 0; /* Leggermente aumentato (da 1 a 1.5) per staccare meglio le foto sequenziali */
  object-fit: contain;
  border-radius: 8px; /* Un tocco di eleganza coordinato col resto del sito */
  
  @media (max-width: ${breakpointNum.bigtablet}px) {
    max-width: 80%;
  }
  
  @media (max-width: ${breakpointNum.smalltablet}px) {
    max-width: 100%;
    max-height: 350px; /* Su smartphone abbassiamo un po' il limite verticale per non riempire tutto lo schermino */
  }
`

export const ImgDescription = styled(T.P4)`
  font-style: italic;
  text-align: center;
  margin-block-start: 0.5em;
`
