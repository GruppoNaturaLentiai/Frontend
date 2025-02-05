import styled from "styled-components";
import { breakpointNum, colors } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 2px ${colors.green.green900};
  border-radius: 8px;
  justify-items: center;
  margin: 32px;
  padding: 32px;
  user-select: none;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    margin: 24px;
    padding: 24px;    
    flex-direction: column;
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


export const LeftWrapper = styled.div`
  flex-grow: 5;  
  flex-shrink: 1; 
  flex-basis: 0;
`

export const SingleRuleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 16px;
  flex-grow: 1; 
  flex-shrink: 1;
  flex-basis: auto;
  @media (max-width: ${breakpointNum.bigtablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 120px;
    min-width: 120px;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    min-height: 100px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 8px; 
    min-height: 80px;   
  }
`


export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  @media (max-width: ${breakpointNum.bigtablet}px) {
    max-width: 120px;
    max-height: 120px;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    max-width: 100px;
    max-height: 100px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    max-width: 50px;
    max-height: 50px;
  }
`