"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import StyledComponentsRegistry from "../../../libs/registry";
import { GlobalStyles } from "./GlobalStyles";
import { Footer, Header } from "../LandingPage";
// import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        {/* Removeing Preloader for now because its a little laggy. */}
        {/* <Preloader setComplete={setComplete} /> */}
        {/* <div className={complete ? "complete" : "not_complete"}> */}
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
