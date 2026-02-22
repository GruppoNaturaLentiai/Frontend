import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpointNum.smalltablet}px) {
    padding: 24px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 16px;
  }
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

/* NUOVO CONTENITORE: Ancora il testo esattamente ai bordi della foto! */
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
`

export const TextWrapper = styled.div`
  margin-top: 10px;
  position: absolute;
  z-index: 4;
  max-width: calc(100% - 75px);
  text-align: center;
  user-select: none;

  animation: fadeIn 3s ease-in-out forwards;
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
    position: relative;
    max-width: 1025px;
    padding-left: 5px;
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
      padding-left: none;
    }
  }

  @media (max-width: ${breakpointNum.mobile}px) {
    padding: 8px;
  }
`

export const NewsPillWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px; /* Spazio elegante tra la pillola e la foto */
  z-index: 10;

  a {
    text-decoration: none;
  }
`

export const NewsPill = styled.div`
  /* Colori solidi per risaltare sullo sfondo chiaro del sito */
  background: ${colors.green.green100};
  border: 1px solid ${colors.green.green300};
  padding: 6px 12px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 95%;

  &:hover {
    background: ${colors.green.green200};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  .badge {
    background: ${colors.green.green700};
    color: ${colors.green.green50};
    font-size: 0.75rem;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .title {
    color: ${colors.green.green900};
    font-size: 0.95rem;
    font-family: "Funnel Sans", sans-serif;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 350px;

    @media (max-width: ${breakpointNum.mobile}px) {
      max-width: 180px;
      font-size: 0.85rem;
    }
  }

  .arrow {
    color: ${colors.green.green900};
    font-weight: bold;
  }
`

export const StyledImg = styled(GatsbyImage)``
