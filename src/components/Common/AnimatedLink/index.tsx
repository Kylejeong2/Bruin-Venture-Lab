"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Div, Word, Span, AbsoluteContainer } from "./styles";

type Props = {
  title: string;
  url: string;
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedLink = ({ title, url }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(url);
    }
  };

  return (
    <Div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Word animate={isHovered ? "hover" : "rest"} variants={titleAnimation}>
        <Span>{title}</Span>
      </Word>
      <AbsoluteContainer>
        <Word animate={isHovered ? "hover" : "rest"} variants={titleAnimation}>
          <Span>{title}</Span>
        </Word>
      </AbsoluteContainer>
    </Div>
  );
};

export default AnimatedLink;
