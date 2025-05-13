import styled from "styled-components"
import { breakpointNum, colors, horizBreakpointsHeight } from "../../styles"

export const Wrapper = styled.main`
  border-radius: 8px;
  min-height: 500px;
  background-color: ${colors.green.green50};
  justify-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    min-width: 480px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    min-width: 280px;
    min-height: 380px;
  }
  @media (max-height: ${horizBreakpointsHeight.medium}px) {
    min-height: 300px;
  }
`
