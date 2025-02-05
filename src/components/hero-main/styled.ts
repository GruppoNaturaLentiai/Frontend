import styled from "styled-components";
import { breakpointNum, colors } from "../../styles";

export const Wrapper = styled.div`
  padding: 32px;
  @media (max-width: ${breakpointNum.smalltablet}px) {
    padding: 0 24px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 16px;
  }
  animation: fadeIn 1.0s ease-in-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const TextWrapper = styled.div`
  margin-top: 10px;
  position: absolute;
  z-index: 4;
  max-width: calc(100% - 140px); 
  text-align: center;
  user-select: none;

  animation: fadeIn 3.0s ease-in-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  > p {
    margin-top: 0;
  }
  > * {
    color: ${colors.green.green100};
    position:relative;
    max-width: 1150px;
  }

  @media (max-width: ${breakpointNum.medium}px) {
    .signature {
      margin-top: 4px;
    }
    
  }

  @media (max-width: ${breakpointNum.bigtablet + 10}px) {
    .signature {
      margin-top: 1em;
    }
    margin-top: none;
    position: unset;
    max-width: none;
    > * {
      color: ${colors.green.green950};
    }
  }

  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 8px;
  }

`