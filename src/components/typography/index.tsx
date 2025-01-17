import styled from "styled-components"
import { breakpoint } from "../../styles"

export const fontSizes = {
  h1: 42,
  h2: 23,
  h3: 17,
  h4: 15,
  h5: 13,
  h6: 11,
  h7: 10,
  h8: 9,
  p1: 17,
  p2: 15,
  p3: 13,
  p4: 11,
  p5: 10,
  notes: 10,
}

export const globalStylesTypography = `
  margin-bottom: 0;
`
export const globalHeaderStylesTypography = `
  ${globalStylesTypography}
  font-family: Lato-Bold;
`

export const globalParagraphStylesTypography = `
  ${globalStylesTypography}
  font-family: Lato-Regular;
`

export const H1 = styled.h1`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h1}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h2}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h3}px;
  }
`

export const H2 = styled.h2`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h2}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h3}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h4}px;
  }
`

export const H3 = styled.h3`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h3}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h4}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h5}px;
  }
`

export const H4 = styled.h4`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h4}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h5}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h6}px;
  }
`
export const H5 = styled.h5`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h5}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h6}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h7}px;
  }
`

export const H6 = styled.h6`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h6}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h7}px;
  }
`

export const H7 = styled.h6`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h7}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h8}px;
  }
`

export const P1 = styled.p`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p1}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p2}px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p3}px;
  }
`

export const P2 = styled.p`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p2}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p3}px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p4}px;
  }
`
export const P3 = styled.p`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p3}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p4}px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p5}px;
  }
`

export const P4 = styled.p`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p4}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p5}px;
  }
`

export const P5 = styled.p`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p5}px;
  @media (max-width: ${breakpoint.tablet}) {
    font-size: 12px;
  }
`

export const Notes = styled.p`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.notes}px;
`
