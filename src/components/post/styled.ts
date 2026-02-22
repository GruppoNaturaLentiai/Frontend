import styled from "styled-components"
import { breakpoint, colors } from "../../styles"
import { Link } from "gatsby"

export const Article = styled.article`
  padding: 64px;

  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  overflow-wrap: break-word;

  @media (max-width: ${breakpoint.tablet}) {
    padding: 32px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    padding: 16px;
  }
`

export const AuthorDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  flex-wrap: wrap;
`

export const CoverImageWrp = styled.div`
  padding: 2em 0;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .gatsby-image-wrapper,
  img {
    border-radius: 12px;
    max-height: 550px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 100%;
    padding: 1.5em 0;
  }
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${colors.green.green600};
  text-decoration: none;
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Funnel Sans", sans-serif;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.green.green900};
    transform: translateX(-5px);
  }
`

export const PostNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 2px solid ${colors.green.green200};
  width: 100%; /* Assicura che il contenitore non sbordi */
  box-sizing: border-box;

  @media (max-width: ${breakpoint.bigtablet}) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const NavSide = styled.div`
  /* LA CHIAVE DEL SUCCESSO: Max-width rigido su desktop */
  flex: 1;
  max-width: 40%; /* Impedisce ai lati di occupare troppo spazio, lasciando respiro al bottone centrale */
  display: flex;
  min-width: 0;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  @media (max-width: ${breakpoint.bigtablet}) {
    width: 100%;
    max-width: 100%; /* Su mobile togliamo il limite */
    &.left,
    &.right {
      justify-content: center;
    }
  }
`

export const NavButton = styled.div<{ $align: "left" | "right" }>`
  max-width: 100%;

  a {
    text-decoration: none;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) =>
      $align === "left" ? "flex-start" : "flex-end"};
    text-align: ${({ $align }) => $align};
    max-width: 100%;

    &:hover {
      transform: ${({ $align }) =>
        $align === "left" ? "translateX(-5px)" : "translateX(5px)"};
      .nav-title {
        color: ${colors.green.green500};
      }
    }

    @media (max-width: ${breakpoint.bigtablet}) {
      align-items: center;
      text-align: center;
    }
  }

  .nav-label {
    color: ${colors.green.green600};
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .nav-title {
    color: ${colors.green.green900};
    margin: 0;
    transition: color 0.3s ease;

    /* TRONCAMENTO AGGRESSIVO */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`

export const BackToBlogButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.green.green100};
  color: ${colors.green.green900};
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: "Funnel Sans", sans-serif;

  > * {
    margin: 0;
    color: inherit;
  }

  &:hover {
    background-color: ${colors.green.green200};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.green.green900}20;
  }

  &:active {
    transform: translateY(0);
  }
`
