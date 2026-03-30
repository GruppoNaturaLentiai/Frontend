import styled, { keyframes } from "styled-components"
import { breakpoint, breakpointNum, colors } from "../../styles"
import * as T from "./../typography"
import { color } from "framer-motion"

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  justify-content: center;
  @media (min-width: ${breakpointNum.bigtablet + 1}px) {
    display: none;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    padding: 24px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 16px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`

export const TwoWrapperMobile = styled.div`
  @media (min-width: ${breakpointNum.bigtablet + 1}px) {
    display: none;
  }
  min-height: 100px;
`

export const ContinueReading = styled(T.P2)`
  color: ${colors.green.green700};
`

export const TextContainer = styled.div`
  position: relative;
`

export const TextWrapper = styled.div<{ $isExpanded: boolean; $isShort: boolean }>`
  position: relative;
  overflow: hidden;
  
  /* Se il testo è corto o espanso, non lo tagliamo. Altrimenti lo fermiamo a 7.5em */
  max-height: ${({ $isExpanded, $isShort }) => ($isExpanded || $isShort ? "2000px" : "7.5em")};
  transition: max-height 0.6s ease-in-out;
  
  /* IL SEGRETO: Creiamo uno spazio vuoto in fondo al blocco SOLO per ospitare il bottone! */
  padding-bottom: ${({ $isShort }) => ($isShort ? "0" : "3rem")};
`

export const FadeOut = styled.div<{ $isExpanded: boolean; $isShort: boolean }>`
  /* Scompare se il testo è corto o se abbiamo già espanso la tendina */
  display: ${({ $isShort, $isExpanded }) => ($isShort || $isExpanded ? "none" : "block")};
  
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5em;
  background: linear-gradient(to bottom, transparent, ${colors.green.green50} 80%);
  pointer-events: none;
`

export const ReadMoreWrapper = styled.div<{
  $isExpanded: boolean
  $isShort: boolean
}>`
  display: ${({ $isShort }) => ($isShort ? "none" : "flex")};
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
  padding-bottom: 5px; /* Lo solleviamo leggermente dal fondo */

  > * {
    margin: 0;
    background-color: ${colors.green.green200};
    color: ${colors.green.green900};
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid ${colors.green.green300};
    transition: all 0.3s ease;
    
    /* Nessuna animazione opacity: 0! Appare subito e in modo affidabile */
    
    &:hover {
      background-color: ${colors.green.green300};
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
      background-color: ${colors.green.green400};
    }
  }
`