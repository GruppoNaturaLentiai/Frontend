import styled from "styled-components"
import { breakpointNum } from "../../styles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 32px;
  gap: 20px;
  @media (max-width: ${breakpointNum.mobile}px) {
    > svg {
      max-width: 200px;
    }
  }
`
