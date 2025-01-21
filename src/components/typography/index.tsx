import styled from "styled-components"
import { breakpoint, colors } from "../../styles"

export const fontSizes = {
  h1: 42,
  h2: 23,
  h3: 17,
  h4: 15,
  h5: 13,
  h6: 11,
  h7: 10,
  h8: 9,
  p1: 22,
  p2: 18,
  p3: 16,
  p4: 14,
  p5: 12,
  notes: 10,
}

export const globalStylesTypography = `
  margin-bottom: 0;
  color: ${colors.green.green900};
`
export const globalHeaderStylesTypography = `
  ${globalStylesTypography}
  font-family: 'Funnel Sans';
  font-weight: bold;
`

export const globalParagraphStylesTypography = `
  ${globalStylesTypography}
  font-family: 'Funnel Sans';
`

export type FontFamilies = "Condiment" | "Funnel-Sans" | "Caveat" | "Cedarville Cursive"

export const H1 = styled.h1<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h1}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h2}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h3}px;
  }
`

export const H2 = styled.h2<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h2}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h3}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h4}px;
  }
`

export const H3 = styled.h3<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h3}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h4}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h5}px;
  }
`

export const H4 = styled.h4<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h4}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h5}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h6}px;
  }
`
export const H5 = styled.h5<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h5}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h6}px;
  }
  @media (max-width: ${breakpoint.mobile}) {
    font-size: ${fontSizes.h7}px;
  }
`

export const H6 = styled.h6<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h6}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h7}px;
  }
`

export const H7 = styled.h6<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalHeaderStylesTypography}
  font-size: ${fontSizes.h7}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.h8}px;
  }
`

export const P1 = styled.p<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p1}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p2}px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p3}px;
  }
`

export const P2 = styled.p<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p2}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p3}px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p4}px;
  }
`
export const P3 = styled.p<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p3}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p4}px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p5}px;
  }
`

export const P4 = styled.p<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p4}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSizes.p5}px;
  }
`

export const P5 = styled.p<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.p5}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
  @media (max-width: ${breakpoint.tablet}) {
    font-size: 12px;
  }
`

export const Notes = styled.p<{  $font?: FontFamilies, $textAlign?: "left" | "right" | "center" }>`
  ${globalParagraphStylesTypography}
  font-size: ${fontSizes.notes}px;
  ${({ $font }) => $font && `font-family: ${$font};`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
`
