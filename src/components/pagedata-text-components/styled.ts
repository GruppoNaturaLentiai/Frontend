import styled from "styled-components"
import { breakpoint, breakpointNum } from "../../styles"

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px; 
  padding: 32px;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  
  @media (max-width: ${breakpointNum.bigtablet}px) {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export const TwoColsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px; 
  width: 100%;

  @media (max-width: ${breakpoint.bigtablet}) {
    display: none;
  }
  &:nth-child(odd) {
    flex-direction: row;
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`

export const LeftTwoColsWrapper = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centra perfettamente i contenuti orizzontalmente */
`

export const RightTwoColsWrapper = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`