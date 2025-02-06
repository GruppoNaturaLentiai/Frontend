import React, { useEffect, useState } from "react"
import { ImageData } from "../../types"
import * as T from "./../typography"
import * as S from "./styled"
import Icon from "../icons"
import useSwipe from "../../hooks/useSwipe"

interface CarouselProps {
  images: ImageData[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLargeImage, setShowLargeImage] = useState(false)
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => { setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1)) },
    onSwipedRight: () => { setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1)) }
  })

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const onClickImage = () => {
    setShowLargeImage(true)
  }

  const closeImage = () => {
    setShowLargeImage(false)
  }

  const getStyles = (index: number) => {
    const distance = Math.abs(index - currentIndex)
    const isExtreme = distance >= 2
    const isCentralImage = distance === 0
    const isSideImage = distance === 1
    return {
      scale: isExtreme ? 0.25 : isSideImage ? 0.5 : 1,
      zIndex: isCentralImage ? 3 : isSideImage ? 2 : 1,
      opacity: isCentralImage ? 1 : isSideImage ? 0.66 : 0.33,
      x: `${(index - currentIndex) * 33}%`,
    }
  }

  // If we are seeing an image, prevent the
  // the user to scroll up/down
  const handleWheel = (event: WheelEvent) => {
    if (showLargeImage) {
      event.preventDefault()
    }
  }
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [showLargeImage])

  return (
    <>
      <S.OuterWrapper>
        <S.ButtonWrapper $position="left" onClick={handlePrev}>
          <Icon type="chevron" width={24} />
        </S.ButtonWrapper>
        <S.Wrapper>
          {images.map((image, index) => (
            <S.CarouselItem
              $isCurrentImage={currentIndex === index}
              key={index}
              animate={getStyles(index)}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <T.H2
                className="title"
                dangerouslySetInnerHTML={{ __html: image.title }}
              />
              <S.ImgWrapper
                $showZoom={currentIndex === index}
                onClick={currentIndex === index ? onClickImage : undefined}
                {...currentIndex === index ? swipeHandlers : {}}
              >
                {image.image && (
                  <S.StyledGatsbyImage
                    key={`img-${index}`}
                    image={image.image}
                    alt={image.alt || "Content Data"}
                  />
                )}
              </S.ImgWrapper>
              <S.Shadow />
              {
                image.copyright ? (
                  <T.P4 className="copyright">Foto di {image.copyright}</T.P4>
                ) : (
                  <T.P4 className="copyright">Autore sconosciuto</T.P4>
                )
              }
              < T.P2
                className="caption"
                dangerouslySetInnerHTML={{ __html: image.description }}
              />
            </S.CarouselItem>
          ))}
        </S.Wrapper>
        <S.ButtonWrapper $position="right" onClick={handleNext}>
          <Icon type="chevron" width={24} />
        </S.ButtonWrapper>
      </S.OuterWrapper >
      {showLargeImage && images[currentIndex].image && (
        <S.ImageOverlay
          onWheel={e => {
            e.preventDefault()
          }}
          onClick={closeImage}
          className={showLargeImage ? "visible" : ""}
        >
          <S.LargeImageWrapper>
            <T.H2
              className="title"
              dangerouslySetInnerHTML={{ __html: images[currentIndex].title }}
              style={{ marginBottom: 4 }}
            />
            <S.StyledGatsbyImageLarge
              image={images[currentIndex].image}
              alt={images[currentIndex].alt || "Enlarged Image"}
              style={{ overflow: "visible", maxHeight: "80vh" }}
            />
            {images[currentIndex].copyright ? (
              <T.P4 className="copyright">
                Foto di {images[currentIndex].copyright}
              </T.P4>
            ) : (
              <T.P4 className="copyright">Autore sconosciuto</T.P4>
            )}
            <T.P2
              className="caption"
              dangerouslySetInnerHTML={{
                __html: images[currentIndex].description,
              }}
            />
          </S.LargeImageWrapper>
        </S.ImageOverlay>
      )
      }
    </>
  )
}

export default Carousel
