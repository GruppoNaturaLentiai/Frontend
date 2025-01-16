import styled from "styled-components"
import { colors } from "../../styles"

export const Header = styled.header`
  height: 50px;
  background-color: ${colors.green.green200};
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 32px;
  justify-content: space-between;
`

export const LeftWrapper = styled.div`
  min-width: 100px;
`

export const RightWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-right: 32px;
`

export const NavBarList = styled.div`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

export const NavBarItem = styled.li<{ $isActive: boolean }>`
  position: relative;
  margin: 0 1rem;
  cursor: pointer;
  z-index: 2;
  > a {
    text-decoration: none;
    ${({ $isActive }) => $isActive && `color: ${colors.green.green550}`}; 
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: ${colors.green.green600};
    }

    > h4 {
      ${({ $isActive }) => $isActive && `color: ${colors.green.green550}`}; 
      &:active {
        color: ${colors.green.green600};
      }     
    }
  }
`

export const SubsectionList = styled.ul<{ $isOpen: boolean }>`
  padding-inline-start: 0;
  list-style: none;
  min-width: 110px;
  margin: 0;
  position: absolute;
  top: 100%;
  left: -15px;
  background-color: ${colors.green.green400};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;

  ${({ $isOpen }) => $isOpen && `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}

`;

export const SubsectionItem = styled.div`
  > a {
    text-decoration: none;
    > h4 {
      margin: 1em;
      color: ${colors.green.green700};
      &:hover {
        color: ${colors.green.green100};
        transition: all 0.2s ease-in-out;
      }
      &:active {
        color: ${colors.green.green200};
      } 
    }
  }
`