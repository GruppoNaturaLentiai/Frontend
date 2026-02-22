import React from "react"
import { ImageData } from "../../types"
import * as S from "./styled"
import * as T from "./../typography"
import { Link } from "gatsby"

interface HeroMainProps {
  img: ImageData
  content: {
    quote: string
    signature: string
  }
  latestPost?: { title: string; slug: string } | null
}

const HeroMain: React.FC<HeroMainProps> = ({
  img,
  content,
  latestPost,
}: HeroMainProps) => {
  const { quote, signature } = content

  return (
    <S.Wrapper>
      {/* LA PILLOLA ORA È FUORI DALLA FOTO */}
      {latestPost && (
        <S.NewsPillWrapper>
          <Link to={`${latestPost.slug}`}>
            <S.NewsPill>
              <span className="badge">Novità</span>
              <span className="title">{latestPost.title}</span>
              <span className="arrow">→</span>
            </S.NewsPill>
          </Link>
        </S.NewsPillWrapper>
      )}

      {/* CONTENITORE CHE TIENE UNITI FOTO E CITAZIONE */}
      <S.ImageContainer>
        <S.TextWrapper>
          <T.P1 $font="Caveat">{quote}</T.P1>
          <T.H3
            className="signature"
            $font={"Cedarville Cursive"}
            $textAlign={"right"}
            dangerouslySetInnerHTML={{ __html: signature }}
          />
        </S.TextWrapper>

        {img.image && (
          <S.StyledImg
            image={img.image}
            alt={img.alt ?? ""}
            style={{ borderRadius: "8px", marginTop: 4 }}
          />
        )}
      </S.ImageContainer>
    </S.Wrapper>
  )
}

export default HeroMain
