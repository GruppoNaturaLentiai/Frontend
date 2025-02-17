import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"
import * as T from "./../typography"

export const OuterWrapper = styled.div`
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: row;
  min-width: calc(100vw - 82px);
  min-height: 900px;
  @media (max-width: ${breakpointNum.bigtablet + 1}px) {
    min-height: 900px;
  }
  @media (max-width: ${breakpointNum.tablet}px) {
    min-width: calc(100vw - 60px);
    min-height: 700px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    min-height: 500px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonWrapper = styled.div<{ $position: "left" | "right" }>`
  background-color: ${colors.green.green400};
  border-radius: 50%;
  border: 1px solid ${colors.green.green800};
  z-index: 13;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: all 0.5s;
  margin: 0 1em;
  @media (max-width: ${breakpointNum.mobile}px) {
    width: 24px;
    height: 24px;
  }

  ${({ $position }) =>
    $position === "left"
      ? `box-shadow: -2px 2px 4px ${colors.green.green950};`
      : `box-shadow: 2px 2px 4px ${colors.green.green950};`}

  > svg {
    ${({ $position }) =>
    $position === "left"
      ? "transform: rotate(90deg);"
      : "transform: rotate(-90deg);"}
    fill: ${colors.green.green700};
    margin-top: 6px;
    ${({ $position }) =>
    $position === "left" ? "margin-left: 3px;" : "margin-left: 8px;"}
    transition: all 0.5s;

    @media (max-width: ${breakpointNum.mobile}px) {
      ${({ $position }) =>
    $position === "left" ? "margin-left: -2px;" : "margin-left: 1px;"}
      height: 12px;
    }
  }
  &:hover {
    background-color: ${colors.green.green500};
    > svg {
      fill: ${colors.green.green800};
    }
  }
  &:active {
    background-color: ${colors.green.green550};
    > svg {
      fill: ${colors.green.green900};
    }
  }
`

export const Shadow = styled.div`
  padding: 5px;
  width: 50%;
  height: 10px;
  background: radial-gradient(
    ellipse at center,
    ${colors.green.green900},
    transparent
  );
  filter: blur(8px);
  opacity: 0.8;
`

export const CarouselItem = styled(motion.div) <{ $isCurrentImage: boolean }>`
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
    ${({ $isCurrentImage }) => !$isCurrentImage && "opacity: 0.6;"}
  }
  .caption {
    margin-top: 1.5em;
    text-align: center;
    ${({ $isCurrentImage }) => !$isCurrentImage && "opacity: 0.6;"}
  }
  .copyright {
    margin-top: 1em;
    text-align: center;
    ${({ $isCurrentImage }) => !$isCurrentImage && "opacity: 0.6;"}
  }
`

export const ImgWrapper = styled.div<{ $showZoom: boolean }>`
  ${({ $showZoom }) => $showZoom && "cursor: zoom-in;"}
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
`

export const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.green.green950};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  flex-direction: column;
  animation: fadeIn 0.5s ease-in-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const CloseImageCaption = styled(T.H2)`
  position: absolute;
  top: 0px;
  right: 1.8em;
  color: ${colors.green.green50};
  @media (min-width: ${breakpointNum.tablet + 1}px) {
    display: none;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    right: 1em;
  }
`

export const LargeImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    color: ${colors.green.green100};
    text-align: center;
  }
`

export const StyledGatsbyImageLarge = styled(GatsbyImage)`
  border: solid 2px ${colors.green.green50};
  max-height: 80vh;
  max-width: 95vw;
  @media (max-width: ${breakpointNum.tablet}px) {
    max-height: 75vh;
    max-width: 90vw;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    max-height: 70vh;
    max-width: 90vw;
  }

  img {
    max-width: 100%;
    max-height: 80vh;
    transition: transform 0.3s ease-in-out;
    @media (max-width: ${breakpointNum.tablet}px) {
      max-height: 75vh;
      max-width: 90vw;
    }
    @media (max-width: ${breakpointNum.mobile}px) {
      max-height: 70vh;
      max-width: 90vw;
    }
  }
`
