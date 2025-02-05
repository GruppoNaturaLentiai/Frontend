import styled from "styled-components";
import { breakpointNum } from "../../styles";

export const Wrapper = styled.div`
  padding: 32px;
  @media (max-width: ${breakpointNum.tablet}px) {
    padding: 24px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 16px;
  }
`

export const HeaderWrapper = styled.div`
  justify-items: center;
  text-align: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  justify-content: center;
  padding-top: 4em;
`

export const IconWrapper = styled.div`
  > svg {
    width: 4em !important;
    height: 4em !important;
    @media (max-width: ${breakpointNum.tablet}px) {
      width: 2.5em !important;
      height: 2.5em !important;
    }
  }
  align-content: center;
`

export const IBANWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  > h2 {
    margin-top: 0;
  }
  > p {
    align-self: start;
  }
`

