import { useState } from "react";
import styled from "styled-components";
import slides from "./data/slides";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <HeroSection>
      <ImageContainer>
        <picture>
          <source
            media="(max-width:768px)"
            srcSet={slides[currentSlide].mobileImage}
          />

          <img
            src={slides[currentSlide].desktopImage}
            alt={slides[currentSlide].title}
          />
        </picture>
      </ImageContainer>

      <Content>
        <h1>{slides[currentSlide].title}</h1>

        <p>{slides[currentSlide].description}</p>

        <ShopButton>SHOP NOW</ShopButton>

        <Buttons>
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </Buttons>
      </Content>
    </HeroSection>
  );
}

/* ================= STYLES ================= */

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img,
  picture {
    width: 100%;
    height: 100%;
    display: block;
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 45vh;
  }
`;

const Content = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  padding: 5rem;

  h1 {
    /* font-size: clamp(2.5rem, 4vw, 4rem); */
    line-height: 1;
    color: black;

    font-size: 4rem;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    line-height: 1.7;
    color: hsl(0, 0%, 63%);
  }

  @media (max-width: 1000px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem 5rem;
  }
`;

const ShopButton = styled.button`
  border: none;
  background: transparent;

  align-self: flex-start;

  cursor: pointer;

  letter-spacing: 0.7rem;
  font-weight: 600;

  transition: 0.3s;

  &:hover {
    color: hsl(0, 0%, 63%);
  }
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;

  button {
    width: 80px;
    height: 80px;

    border: none;
    background: black;
    color: white;

    font-size: 1.5rem;
    cursor: pointer;

    transition: 0.3s;
  }

  button:hover {
    background: hsl(0, 0%, 27%);
  }

  @media (max-width: 768px) {
    top: -80px;
    right: 0;
    left: auto;

    button {
      width: 60px;
      height: 60px;
    }
  }
`;
