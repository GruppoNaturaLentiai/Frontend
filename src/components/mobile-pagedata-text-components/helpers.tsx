import React from "react"
import { ImageContentData, ImageData, TextContentData } from "../../types"
import ImageWithCredits from "../image-with-credits"
import * as T from "../typography"
import * as S from "./styled"

export const renderImage = (
  content: ImageContentData,
  images: ImageData[],
  key: string,
) => {
  const filteredImages = content.content.map(imgFilename =>
    images.find(img => img.fileName === imgFilename),
  )
  return (
    <S.ImageWrapper key={key}>
      {filteredImages.map((img, index) =>
        img ? (
          img.image && (
            <ImageWithCredits
              key={index}
              title={img.title}
              description={img.description}
              alt={img.alt || img.description}
              image={img.image}
              copyright={img.copyright}
              minHeight={content.minHeight}
              minWidth={content.minWidth}
              maxHeight={content.maxHeight}
              maxWidth={content.maxWidth}
              noDescription={content.noDescription}
              noCopyright={content.noCopyright}
            />
          )
        ) : (
          <T.H2 key={`img-${index}`}>Image not found</T.H2>
        ),
      )}
    </S.ImageWrapper>
  )
}

export const renderText = (
  content: TextContentData,
  key: string,
  setExpandText: React.Dispatch<React.SetStateAction<string>>,
  expandText: string,
) => {
  const theText = content.content.join(" <br /> ")
  if (!theText) return <T.H2 key={key}>Text not found</T.H2>

  const isExpanded = key === expandText
  const onClickFn = () => {
    if (key === expandText) setExpandText("")
    else setExpandText(key)
  }

  const isShortText = theText.length < 320

  const { font, position } = content
  switch (content.size) {
    case "h1":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H1
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "h2":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H2
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "h3":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H3
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "h4":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H4
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "h5":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H5
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "h6":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H6
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "h7":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.H7
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "p1":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.P1
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "p2":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.P2
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "p3":
      return (
        <>
          <S.TextWrapper $isExpanded={isExpanded} key={key}>
            <S.TextContainer onClick={onClickFn}>
              <T.P3
                $textAlign={position}
                $font={font}
                dangerouslySetInnerHTML={{ __html: theText }}
              />
            </S.TextContainer>
            <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
            <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
              {
                <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                  {isExpanded ? "Chiudi" : "Leggi di più"}
                </T.H3>
              }
            </S.ReadMoreWrapper>
          </S.TextWrapper>
        </>
      )
    case "p4":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.P4
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "p5":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.P5
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    case "note":
      return (
        <S.TextWrapper $isExpanded={isExpanded} key={key}>
          <S.TextContainer onClick={onClickFn}>
            <T.Notes
              $textAlign={position}
              $font={font}
              dangerouslySetInnerHTML={{ __html: theText }}
            />
          </S.TextContainer>
          <S.FadeOut $isExpanded={isExpanded} $isShort={isShortText} />
          <S.ReadMoreWrapper $isExpanded={isExpanded} $isShort={isShortText} onClick={onClickFn}>
            {
              <T.H3 key={isExpanded ? "chiudi" : "leggi-di-piu"}>
                {isExpanded ? "Chiudi" : "Leggi di più"}
              </T.H3>
            }
          </S.ReadMoreWrapper>
        </S.TextWrapper>
      )
    default:
      return <T.H2 key={key}>Text size not found</T.H2>
  }
}
