import styled from "styled-components"
import * as T from "../typography"
import { breakpoint, colors } from "../../styles"

export const ImageWrapper = styled.div<{
  $position?: "left" | "right" | "center"
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $position }) => {
    switch ($position) {
      case "left":
        return "flex-start"
      case "right":
        return "flex-end"
      default:
        return "center"
    }
  }};
  text-align: ${({ $position }) =>
    $position === "center" ? "center" : "inherit"};
`

export const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 1.5em 0;
  border-radius: 8px;
`

export const ImgDescription = styled(T.P4)`
  font-style: italic;
  text-align: center;
  margin-block-start: 0.5em;
`

export const VideoWrapper = styled.figure`
  width: 100%;
  margin: 1.5em 0;

  @media (max-width: ${breakpoint.mobile}) {
    margin: 1em 0;
  }
`

export const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: ${breakpoint.mobile}) {
    border-radius: 6px;
  }
`

export const VideoPoster = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:focus-visible {
    outline: 3px solid ${colors.green.green500};
    outline-offset: -3px;
  }
`

export const PlayIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(56px, 14vw, 72px);
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${colors.green.green600}e6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &::after {
    content: "";
    margin-left: 12%;
    border-style: solid;
    border-width: 0.6em 0 0.6em 1em;
    border-color: transparent transparent transparent #fff;
    font-size: clamp(16px, 4vw, 22px);
  }

  ${VideoPoster}:hover & {
    transform: translate(-50%, -50%) scale(1.08);
    background-color: ${colors.green.green600};
  }
`
