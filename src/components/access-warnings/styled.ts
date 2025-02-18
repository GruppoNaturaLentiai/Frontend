import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px ${colors.green.green900};
  border-radius: 8px;
  justify-items: center;
  margin: 32px;
  padding: 32px;
  user-select: none;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    margin: 24px;
    padding: 24px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    margin: 16px;
    padding: 16px;
  }
`

export const HeaderWrapper = styled.div`
  justify-items: center;
  text-align: center;
  .subheader {
    color: ${colors.red.warning};
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-around;
`

export const SingleRuleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 16px;
  height: 10%;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    min-height: 120px;
    min-width: 120px;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    min-height: 100px;
    min-width: 100px;
  }
  @media (max-width: ${breakpointNum.smalltablet}px) {
    min-height: 90px;
    min-width: 90px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 8px;
    min-height: 80px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 150px;
  min-height: 150px;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    min-width: 120px;
    min-height: 120px;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    min-width: 100px;
    min-height: 100px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    min-width: 50px;
    min-height: 50px;
  }
`
