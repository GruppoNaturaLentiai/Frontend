import React from "react"
import { ImageData } from "../../types"
import * as S from "./styled"
import * as T from "./../typography"
import { GatsbyImage } from "gatsby-plugin-image"

interface HeroMainProps {
  img: ImageData
  content: {
    quote: string,
    signature: string
  }
}

const HeroMain: React.FC<HeroMainProps> = ({ img, content }: HeroMainProps) => {
  const { quote, signature } = content

  return <S.Wrapper>
    <S.TextWrapper>
      <T.P1 $font="Caveat">{quote}</T.P1>
      <T.H3 className="signature" $font={"Cedarville Cursive"} $textAlign={"right"} dangerouslySetInnerHTML={{ __html: signature }} />
    </S.TextWrapper>
    {img.image && <GatsbyImage
        image={img.image}
        alt={img.alt ?? ""}
        style={{ borderRadius: "8px", marginTop: 4 }}
      />}
  </S.Wrapper>
}

export default HeroMain