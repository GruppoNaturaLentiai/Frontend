import styled from "styled-components"
import { breakpoint, breakpointNum, colors, horizBreakpointsHeight } from "../../styles"

export const Header = styled.header`
  height: 60px;
  background-color: ${colors.green.green200};
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 32px;
  justify-content: space-between;
  @media (max-width: ${breakpoint.tablet}) {
    display: none;
  }
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9998;
  box-shadow: 0px 1px 6px ${colors.green.green700};
  @media (max-height: ${horizBreakpointsHeight.medium}px) {
    padding: 16px;
    height: 40px;
    gap: 8px;
    position: unset;
  }
`

export const LeftWrapper = styled.div`
  min-width: 120px;
  @media (max-height: ${horizBreakpointsHeight.medium}px) {
    min-width: 80px;
  }
`

export const RightWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 32px;
  &.mobile {
    cursor: pointer;
  }
`

export const NavBarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

export const NavBarItem = styled.li<{ $isActive: boolean }>`
  position: relative;
  margin: 0 1rem;
  cursor: pointer;
  z-index: 10;
  text-align: center;
  align-items: center;
  align-self: center;
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

    > * {
      ${({ $isActive }) => $isActive && `color: ${colors.green.green550}`};
      &:active {
        color: ${colors.green.green600};
      }
      @media (max-height: ${horizBreakpointsHeight.medium}px) {
        margin-top: 0px;
      }
    }
  }
`

export const SubsectionList = styled.ul<{ $isOpen: boolean }>`
  width: 100%;
  padding-inline-start: 0;
  list-style: none;
  min-width: 110px;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: ${colors.green.green400};
  box-shadow: 0 4px 6px ${colors.green.green950}60;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`

export const SubsectionItem = styled.div`
  > a {
    text-decoration: none;
    > * {
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

// MOBILE CODE
export const HeaderMobile = styled.div`
  height: 50px;
  background-color: ${colors.green.green200};
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 32px 18px;
  justify-content: space-between;
  @media (min-width: ${breakpointNum.tablet + 1}px) {
    display: none;
  }
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9998;
  box-shadow: 0px 1px 6px ${colors.green.green700};
  @media (max-height: ${horizBreakpointsHeight.thin}px) {
    padding: 12px 8px;
    height: 40px;
    gap: 8px;
    position: unset;
  }
`

export const RightSidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 300px;
  height: 100%;
  background-color: ${colors.green.green900};
  box-shadow: -2px 0 5px ${colors.green.green950}03;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: ${colors.green.green200};
  }
  &:active {
    transition: all 0.5s;
    color: ${colors.green.green400};
  }
  > * {
    color: ${colors.green.green50};
  }
`

export const MobileNavBarList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`

export const MobileNavBarItem = styled.li<{ $isActive: boolean }>`
  margin: 1rem 0;
  > a {
    text-decoration: none;
    > * {
      color: ${({ $isActive }) =>
        $isActive ? colors.green.green500 : colors.green.green300};
      &:active {
        transition: all 0.5s;
        color: ${({ $isActive }) =>
          $isActive ? colors.green.green600 : colors.green.green500};
      }
      font-weight: bold;
    }
  }
`

export const LinkIcon = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  > a {
    text-decoration: none;
    > * {
      margin-top: 0px;
      color: ${({ $isActive }) =>
        $isActive ? colors.green.green500 : colors.green.green300};
      &:active {
        transition: all 0.5s;
        color: ${({ $isActive }) =>
          $isActive ? colors.green.green600 : colors.green.green500};
      }
      font-weight: bold;
    }
  }
`

export const IconWrapper = styled.div<{ $isActive: boolean; $isOpen: boolean }>`
  margin-top: 5px;
  cursor: pointer;
  > svg {
    fill: ${({ $isActive }) =>
      $isActive ? colors.green.green500 : colors.green.green300};

    &:active {
      transition: all 0.5s;
      fill: ${({ $isActive }) =>
        $isActive ? colors.green.green600 : colors.green.green500};
    }
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(0deg)" : "rotate(-90deg)"};
    transition: all 0.7s;
  }
`

export const MobileSubsectionList = styled.ul<{ $show: boolean }>`
  ${({ $show }) => !$show && "display: none;"}
  list-style: none;
  margin-top: 0.5rem;
  padding: 0;
  padding-left: 36px;

  > li {
    margin: 0.5rem 0;

    > a {
      text-decoration: none;
      > * {
        color: ${colors.green.green200};
        &:hover {
          color: ${colors.green.green300};
          transition: all 0.5s;
        }
        &:active {
          transition: all 0.5s;
          color: ${colors.green.green500};
        }
      }
    }
  }
`
