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

export const TextWrapper = styled.div<{ $isExpanded: boolean }>`
  position: relative;
  overflow: hidden;
  max-height: ${({ $isExpanded }) => ($isExpanded ? "2000px" : "4.5em")};
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

export const ReadMoreWrapper = styled.div<{ $isExpanded: boolean, $isShort: boolean  }>`
  ${({ $isShort }) => $isShort && "display:none;"}
  cursor: pointer;
  position: absolute;
  top: 2.3em;
  z-index: 10;
  justify-self: anchor-center;
  ${({ $isExpanded }) => $isExpanded && "position: unset;"}

  h3 {
    color: ${colors.green.green950};
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
    animation-delay: 0.5s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: ${breakpointNum.tablet + 1}px) {
    top: 2em;
  }
`
