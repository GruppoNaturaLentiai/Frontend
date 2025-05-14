import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"

export const Footer = styled.footer`
  background-color: ${colors.green.green400};
  padding: 32px;
  min-height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpointNum.bigtablet + 1}px) {
    display: none;
  }
`

export const MobileFooter = styled.footer`
  background-color: ${colors.green.green400};
  padding: 24px;
  min-height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${breakpointNum.bigtablet}px) {
    display: none;
  }
`

export const UpperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 30px;
  @media (max-width: ${breakpointNum.medium}px) {
    justify-content: center;
    column-gap: 50px;
  }
  @media (max-width: ${breakpointNum.large}px) {
    & > *:nth-child(3) {
      display: flex;
      justify-content: center;
      flex-basis: 100%;
    }
  }

  @media (max-width: ${breakpointNum.bigtablet}px) {
    justify-content: center;
  }
`

export const LogoWrapper = styled.div`
  min-width: 300px;
  @media (max-width: ${breakpointNum.mobile}px) {
    min-width: 200px;
  }
`

export const ContactsIcons = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`

export const IconWrapper = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  fill: ${colors.green.green800};
  &:hover {
    fill: ${colors.green.green900};
  }
  &:focus {
    fill: ${colors.green.green950};
  }
  > * {
    transition: all 0.5s;
    fill: ${colors.green.green800};
    &:hover {
      fill: ${colors.green.green900};
    }
    &:focus {
      fill: ${colors.green.green950};
    }
    > * {
      transition: all 0.5s;
      fill: ${colors.green.green800};
      &:hover {
        fill: ${colors.green.green900};
      }
      &:focus {
        fill: ${colors.green.green950};
      }
      > * {
        transition: all 0.5s;
        fill: ${colors.green.green800};
        &:hover {
          fill: ${colors.green.green900};
        }
        &:focus {
          fill: ${colors.green.green950};
        }
      }
    }
  }
`

export const ContactsLong = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`

export const ContactsLongText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding-left: 2px;
  > h4 {
    text-decoration: underline;
    cursor: pointer;
  }
  > * {
    margin-top: 5px;
  }
`

export const SitemapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`

export const LinksColumn = styled.div`
  > * {
    text-align: center;
  }
  > a {
    text-decoration-color: ${colors.green.green900};
    &:active {
      text-decoration-color: ${colors.green.green950};
    }
  }
`

export const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  align-items: center;
  min-width: 300px;
  > h3 {
    margin-top: 0;
  }
`

export const SponsorPlaceholder = styled.div`
  background-color: ${colors.green.green800};
  min-height: 40px;
  min-width: 100px;
`

export const HorizontalSeparator = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  width: 100%;
  border-bottom: 2px solid ${colors.green.green300};
`

export const LowerContent = styled.div`
  text-align: center;
  > p {
    margin-top: 0px;
  }
`
