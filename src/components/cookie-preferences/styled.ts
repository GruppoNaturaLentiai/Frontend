import styled from "styled-components";
import * as T from "../typography"
import { colors } from "../../styles";

// Styled Components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: ${colors.green.green50};
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
`;

export const Title = styled(T.H3)`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ButtonRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const CheckboxLabel = styled(T.P2)`
  color: ${colors.green.green900};
`

export const ButtonLabel = styled(T.P2)`
  color: ${colors.green.green50};
  margin: 0;  
`


export const ModalButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => `${props.color}cc`};
    transition: all 0.3s ease;
  } 
  &:active {
    background-color: ${(props) => `${props.color}99`};
    transition: all 0.3s ease;
  }
`;