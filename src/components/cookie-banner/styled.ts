import styled from "styled-components"
import { breakpoint, colors } from "../../styles"
import * as T from "../typography"

// Styled Components
export const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.green.green900};
  color: white;
  padding: 1rem;
  text-align: center;
  z-index: 1000;
  @media (max-width: ${breakpoint.verylarge}) {
    width: 100%;
    padding: 1rem 0;
  }
`

export const BannerText = styled(T.P2)`
  margin: 0 0 1rem 0;
  color: ${colors.green.green50};
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ButtonText = styled(T.P2)`
  margin: 0;
  color: white;
`

export const BannerButton = styled.button<{ color: string }>`
  background-color: ${props => props.color};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => `${props.color}cc`};
    transition: all 0.3s ease;
  }
  &:active {
    background-color: ${props => `${props.color}80`};
    transition: all 0.3s ease;
  }
`
