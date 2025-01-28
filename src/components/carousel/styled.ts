import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { breakpointNum, colors } from "../../styles";

export const OuterWrapper = styled.div`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  min-width: calc(100vw - 64px);
  min-height: 900px;
  @media (max-width: ${breakpointNum.bigtablet + 1}px) {
    min-height: 900px;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    min-width: calc(100vw - 50px);
    min-height: 700px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    min-width: calc(100vw - 50px);
    min-height: 500px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonWrapper = styled.div<{ $position: "left" | "right" }>`
  background-color: ${colors.green.green700};
  border-radius: 50%;
  z-index: 13;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: all 0.5s;
  > svg {
    ${({ $position }) => $position === "left" ? "transform: rotate(90deg);" : "transform: rotate(-90deg);"}
    fill: ${colors.green.green200};
    margin-top: 5px;
    ${({ $position }) => $position === "left" ? "margin-left: 3px;" : "margin-left: 5px;"} 
    transition: all 0.5s;   
  }
  &:hover {
    color: ${colors.green.green800};
    > svg {
      fill: ${colors.green.green300};
      }
    }
  &:active {
    color: ${colors.green.green900};
    > svg {
      fill: ${colors.green.green400};
    }
  }
`

export const Shadow = styled.div`
  left: 50%;
  width: 80%;
  height: 10px; 
  background: radial-gradient(ellipse at center, ${colors.green.green900}, transparent);
  filter: blur(8px); 
  opacity: 0.8;
`


export const CarouselItem = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title {
    padding-bottom: 5px;
    width: 100%;
    text-align: center;
  }
  .caption {
    margin-top: 1.5em;
    text-align: center;
  }
  .copyright {
    margin-top: 1em;
    text-align: center;
  }
`

export const StyledGatsbyImage = styled(GatsbyImage)`
  img {
    max-height: 600px;
    @media (max-width: ${breakpointNum.tablet}px) {
      max-height: 400px;
    }
    @media (max-width: ${breakpointNum.mobile}px) {
      max-height: 200px;
    }
  }
`;
