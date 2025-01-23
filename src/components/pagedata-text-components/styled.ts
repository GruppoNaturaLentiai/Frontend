import styled from "styled-components"
import { breakpoint, breakpointNum } from "../../styles"

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  justify-content: center;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`

export const TwoColsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoint.bigtablet}) {
    display: none;
  }
`

export const LeftTwoColsWrapper = styled.div`
  flex: 1;
  padding: 16px;
  align-content: center;
  justify-items: center;
`

export const RightTwoColsWrapper = styled.div`
  flex: 1;
  padding: 16px;
  align-content: center;
  justify-items: center;
`