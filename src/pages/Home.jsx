import React, { useContext } from "react";
import Banner from "../components/Landing page/Banner";
import InspiringBook from "../components/Landing page/InspiringBook";
import { useEffect } from "react";

import Features from "../components/Landing page/Features";
import DiscoverLIbrary from "../components/Landing page/DiscoverLIbrary";
import Footer from "../components/Landing page/Footer";
import Lenis from "lenis";
import LoginModal from "../components/Modals/LoginModal";
import { IsLoginClicked } from "../contexts/LoginContext";
import { Carousel } from "flowbite";
 
const Home = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // });

  const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);
  console.log(loginClickState);

  return (
    <>
      {/* <LoginModal /> */}

      <Banner />
      <Features />
       <InspiringBook />
      <DiscoverLIbrary />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
