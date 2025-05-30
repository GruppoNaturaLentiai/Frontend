import styled from "styled-components";
import * as T from "../typography"
import { breakpoint, colors } from "../../styles";

// Styled Components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  background: ${colors.green.green100};
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  margin: auto;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: ${breakpoint.tablet}) {
    padding: 1.5rem;
    max-height: 85vh;
  }
  
  @media (max-width: ${breakpoint.mobile}) {
    padding: 1.25rem;
    max-height: 80vh;
  }
`;

export const Title = styled(T.H2)`
  font-weight: bold;
  margin: 0 0 1.5rem 0;
  color: ${colors.green.green900};
  text-align: center;
  
  @media (max-width: ${breakpoint.mobile}) {
    margin-bottom: 1.25rem;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-wrap: wrap;
  
  @media (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
`;

export const CookieType = styled.div`
  background: ${colors.green.green50};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CookieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const CookieTitle = styled(T.H4)`
  font-weight: bold;
  color: ${colors.green.green900};
  margin: 0;
`;

export const CookieDescription = styled(T.P3)`
  color: ${colors.green.green800};
  margin: 0.5rem 0 0 0;
  line-height: 1.5;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${colors.green.green900};
  cursor: pointer;
  margin: 0;

  input[type="checkbox"] {
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    min-width: 1.1rem;
    min-height: 1.1rem;
    cursor: pointer;
  }
  
  .label {
    margin: 0;
  }
`;

export const RequiredBadge = styled(T.P4)`
  display: inline-block;
  background: ${colors.green.green300};
  color: ${colors.green.green900};
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  margin-left: 0.75rem;
`;

export const ButtonLabel = styled(T.P4)`
  color: ${colors.green.green50};
  margin: 0;
`


export const ModalButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.5s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  @media (max-width: ${breakpoint.mobile}) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
  
  &:hover {
    background-color: ${(props) => `${props.color}cc`};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  } 
  
  &:active {
    background-color: ${(props) => `${props.color}99`};
    transform: translateY(0);
    box-shadow: none;
  }
  
`;