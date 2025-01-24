import styled from "styled-components"
import { breakpoint, breakpointNum, colors } from "../../styles"
import * as T from "./../typography"

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

export const TextWrapper = styled.div<{ $isExpanded: boolean }>`
  position: relative;
  overflow: hidden;
  max-height: ${({ $isExpanded }) => ($isExpanded ? "1000px" : "4.5em")};
  transition: max-height 0.8s ease-in-out;
`

export const TextContainer = styled.div`
  position: relative;
`

export const FadeOut = styled.div<{ $isExpanded: boolean; $isShort: boolean }>`
  ${({ $isShort }) => $isShort && "display:none;"}
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2em;
  background: linear-gradient(to bottom, transparent, ${colors.green.green500});
  pointer-events: none;

  opacity: ${({ $isExpanded }) => ($isExpanded ? 0 : 1)};
  transition: opacity 0.8s ease-in-out;
`
