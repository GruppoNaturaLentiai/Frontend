import React, { useCallback, useEffect, useState } from "react"
import { ImageData } from "../../types"
import * as T from "./../typography"
import * as S from "./styled"
import Icon from "../icons"
import useSwipe from "../../hooks/useSwipe"
import useResponsiveClickHandler from "../../hooks/useResponsiveClickHandler"
import { breakpoint, breakpointNum, horizBreakpointsHeight } from "../../styles"
import usePreventScrollOnImageView from "../../hooks/usePreventDragAndWheel"

interface CarouselProps {
  images: ImageData[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLargeImage, setShowLargeImage] = useState(false)
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
    },
    onSwipedRight: () => {
      setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
    },
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

  // Use arrows to move back and forth
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev()
      } else if (event.key === "ArrowRight") {
        handleNext()
      }
    },
    [handlePrev, handleNext]
  )
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  // If we are seeing an image, prevent the
  // the user to scroll and drag up/down
  usePreventScrollOnImageView(showLargeImage)

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
              {...(currentIndex === index ? swipeHandlers : {})}
            >
              <T.H2
                className="title"
                dangerouslySetInnerHTML={{ __html: image.title }}
              />
              <S.ImgWrapper
                $showZoom={currentIndex === index}
                onClick={currentIndex === index ? onClickImage : undefined}
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
              {image.copyright ? (
                <T.P4 className="copyright">Foto di {image.copyright}</T.P4>
              ) : (
                <T.P4 className="copyright">Autore sconosciuto</T.P4>
              )}
              <T.P2
                className="caption"
                dangerouslySetInnerHTML={{ __html: image.description }}
              />
            </S.CarouselItem>
          ))}
        </S.Wrapper>
        <S.ButtonWrapper $position="right" onClick={handleNext}>
          <Icon type="chevron" width={24} />
        </S.ButtonWrapper>
      </S.OuterWrapper>
      {showLargeImage && images[currentIndex].image && (
        <S.ImageOverlay className={showLargeImage ? "visible" : ""}>
          <S.CloseImageCaption onClick={closeImage}>
            Chiudi X
          </S.CloseImageCaption>
          <S.LargeImageWrapper>
            {images[currentIndex].title && (
              <T.H2
                className="title"
                dangerouslySetInnerHTML={{ __html: images[currentIndex].title }}
                style={{ marginBottom: 4 }}
              />
            )}
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
            {images[currentIndex].description && (
              <T.P2
                className="caption"
                dangerouslySetInnerHTML={{
                  __html: images[currentIndex].description,
                }}
              />
            )}
          </S.LargeImageWrapper>
        </S.ImageOverlay>
      )}
    </>
  )
}

export default Carousel
