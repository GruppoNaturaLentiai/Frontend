import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"

export const Wrapper = styled.main`
  border-radius: 8px;
  margin: 32px;
  min-height: 500px;
  background-color: ${colors.green.green50};
  max-width: calc(100vw - 64px);
  justify-self: center;
  min-width: 800px;
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
    margin: 24;
  }
`
