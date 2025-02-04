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
import BookTypes from "../components/Landing page/BookTypes";
import CounterUpPage from "../components/Landing page/CounterUpPage";
import RatingsIntro from "../components/Landing page/RatingsIntro";
import FavouriteIntro from "../components/Landing page/FavouriteIntro";

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

      <div className="bg-[#FFFFFF] view">
        <Banner />

        {/* <AttractingQuote /> */}
        {/* <DiscoverLIbrary /> */}

        <Features />
        <InspiringBook
          booksToRender={18}
          setPopUpState={setPopUpState}
          popUpState={popUpState}
        />
        <CounterUpPage />
        {/* <Quotes /> */}
        {/* <BookTypes/> */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
