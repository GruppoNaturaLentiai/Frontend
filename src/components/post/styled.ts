import styled from "styled-components"
import { breakpoint } from "../../styles"

export const Article = styled.article`
  padding: 64px;
  overflow: hidden;
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
`

export const CoverImageWrp = styled.div`
  border-radius: 12px;
  padding: 1em;
  max-width: 40%;
  justify-self: center;
  @media (max-width: ${breakpoint.tablet}) {
    max-width: 60%;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  @media (max-width: ${breakpoint.mobile}) {
    max-width: 100%;
  }
`
