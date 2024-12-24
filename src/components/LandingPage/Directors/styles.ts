"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 4rem;
  background: var(--emerald);
`;

export const Inner = styled.div`
  display: flex;
  padding: 4rem 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 48.5rem;
  margin: 0 auto 4rem;
  h1 {
    color: var(--Background, #070606);
    font-size: 4rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  &:nth-child(2) {
    margin-top: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &:nth-child(2) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Testimonial = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  gap: 1rem;
  transition: transform 0.2s ease-in-out;
  height: 100%;
  min-height: 20rem;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Avatar = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.75rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;

  h3 {
    color: var(--Background, #070606);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    color: #292929;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export const Testimony = styled.p`
  color: #292929;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  margin-top: 2.5rem;
`;

export const Previous = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Next = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  width: 66.67%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
