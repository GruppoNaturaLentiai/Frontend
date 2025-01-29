import styled from "styled-components"
import { colors } from "../../styles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  > svg > * {
    fill: ${colors.green.green900};
  }
`
