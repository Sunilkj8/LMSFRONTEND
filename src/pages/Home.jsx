import React, { useContext, useState } from "react";
import Banner from "../components/Landing page/Banner";
import InspiringBook from "../components/Landing page/InspiringBook";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Features from "../components/Landing page/Features";
import DiscoverLIbrary from "../components/Landing page/DiscoverLIbrary";
import Footer from "../components/Landing page/Footer";
import { IsLoginClicked } from "../contexts/LoginContext";
import Quotes from "../components/Landing page/Quotes";
import BookPopUp from "../components/Modals/BookPopUp";
import Example from "../components/Landing page/authorCarousel";
import AttractingQuote from "../components/Landing page/AttractingQuote";
import Lenis from "lenis";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  const [popUpState, setPopUpState] = useState(false);

  const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);
  console.log(loginClickState);

  return (
    <>
      {/* <LoginModal /> */}
      {popUpState ? (
        <div className="fixed h-screen w-[99vw] popUpDivCover"></div>
      ) : (
        ""
      )}
      <BookPopUp
        translateX={"16vw"}
        setPopUpState={setPopUpState}
        popUpState={popUpState}
      />

      <div className="view">
        <Banner />

        <AttractingQuote />

        <Features />
        <InspiringBook
          booksToRender={18}
          setPopUpState={setPopUpState}
          popUpState={popUpState}
        />
        {/* <DiscoverLIbrary /> */}
        {/* <Quotes /> */}
        {/* <Example/> */}
        {/* <Example/> */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
