import React, { useContext, useState } from "react";
import Banner from "../components/Landing page/Banner";
import InspiringBook from "../components/Landing page/InspiringBook";
import { useEffect } from "react";

import Features from "../components/Landing page/Features";
import Footer from "../components/Landing page/Footer";
import { IsLoginClicked } from "../contexts/LoginContext";
import Lenis from "lenis";
import HorizontalScroll from "../components/Landing page/HorizontalScroll/HorizontalScroll";
import CategoriesShowCase from "../components/Landing page/CategoriesShowCase";
import MarqueeSlider from "../components/Landing page/MarqueeSlider";
// import BookVaultText from "../components/Landing page/BookVaultText/BookVaultText";
import ScrollToTop from "react-scroll-to-top";
import ReviewsFeatureShowcase from "../components/Landing page/ReviewsFeatureShowcase";

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
      <div className=" view">
        <Banner />
        <MarqueeSlider />
        <Features />
        <InspiringBook
          booksToRender={18}
          setPopUpState={setPopUpState}
          popUpState={popUpState}
        />
        <CategoriesShowCase />
        <ReviewsFeatureShowcase />
        <HorizontalScroll />
        {/* <BookVaultText/> */}
        <ScrollToTop
          className="flex items-center p-3 bg-neutral-400 justify-center"
          smooth
        />

        <Footer />
      </div>
    </>
  );
};

export default Home;
