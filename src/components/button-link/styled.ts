import styled from "styled-components"
import { colors } from "../../styles"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2em 0 2em 0;
`

export const ButtonWrapper = styled.div`
  text-align: center;
  background-color: ${colors.green.green400};
  padding: 0.8em;
  max-width: 125px;
  border-radius: 8px;
  transition: all 0.5s;
  &:hover {
    background-color: ${colors.green.green500};
  }
  &:active {
    background-color: ${colors.green.green600};
  }
  > p {
    margin-top: 0;
  }
`
