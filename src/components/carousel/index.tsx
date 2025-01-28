import React, { useState } from "react";
import { ImageData } from "../../types";
import * as T from "./../typography";
import * as S from "./styled";
import Icon from "../icons";

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getStyles = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    const isExtreme = distance >= 2;
    const isCentralImage = distance === 0
    const isSideImage = distance === 1
    return {
      scale: isExtreme ? 0.25 : isSideImage ? 0.50 : 1,
      zIndex: isCentralImage ? 3 : isSideImage ? 2 : 1,
      opacity: isCentralImage ? 1 : isSideImage ? 0.66 : 0.33,
      x: `${(index - currentIndex) * 33}%`,
    };
  };

  return (
    <S.OuterWrapper>
      <S.ButtonWrapper $position="left" onClick={handlePrev}>
        <Icon type="chevron" width={24} />
      </S.ButtonWrapper>
      <S.Wrapper>
        {images.map((image, index) => (
          <S.CarouselItem
            key={index}
            animate={getStyles(index)}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <T.H2 className="title"
              dangerouslySetInnerHTML={{ __html: image.title }} />
            {image.image && <div><S.StyledGatsbyImage
              key={`img-${index}`}
              image={image.image}
              alt={image.alt || "Content Data"}
            /></div>}
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
        ))
        }
      </S.Wrapper >
      <S.ButtonWrapper $position="right" onClick={handleNext}>
        <Icon type="chevron" width={24} />
      </S.ButtonWrapper>
    </S.OuterWrapper >
  );
};

export default Carousel;