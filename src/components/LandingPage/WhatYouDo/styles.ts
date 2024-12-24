"use client";
import { styled } from "styled-components";
import grid_background from "../../../../public/images/offer_card_grid_1.png";

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 10rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto 6rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.4rem;
    }
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, #131313 0%, transparent 100%);
  }
`;

export const TextCtn = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  p {
    color: #989898;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  min-height: 24rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  background: url(${grid_background.src}) #131313 no-repeat;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;
