import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"

export const Wrapper = styled.div`
  border-radius: 8px;
  margin: 32px;
  min-height: 500px;
  background-color: ${colors.green.green50};
  max-width: 1400px;
  justify-self: center;
  min-width: 800px;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    min-width: 500px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    min-width: 280px;
  }
`
