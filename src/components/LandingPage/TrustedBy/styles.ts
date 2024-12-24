"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  background: #0a0a0a;
  padding: 4rem 0;
  margin: 4rem 0;
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #989898;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LogoContainer = styled.div`
  aspect-ratio: 2/1;
  position: relative;
  background: #0f0f0f;
  transition: background-color 0.2s ease;

  &:hover {
    background: #1a1a1a;
  }
`;
