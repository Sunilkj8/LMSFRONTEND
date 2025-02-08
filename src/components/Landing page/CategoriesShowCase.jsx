import React, { useRef, useState } from "react";
import programmingBg from "../../assets/programmingBg.png";
import fictionalBook from "../../assets/fictionalBook.png";
import selfHelpBooks from "../../assets/selfHelpBook.png";
import autobiographyBook from "../../assets/autobiographyBook.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import SingleCategory from "./singleCategory";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "100px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        background: "black",
        borderRadius: "100px",
      }}
      onClick={onClick}
    />
  );
}
const CategoriesShowCase = () => {
  const categoriesArr = [
    { image: selfHelpBooks, title: "Self Help" },
    { image: programmingBg, title: "Programming" },
    { image: fictionalBook, title: "Fictional" },
    { image: autobiographyBook, title: "Autobiography" },
  ];

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const [reveal, setReveal] = useState(false);

  return (
    <div className="blockElem    h-[130vh] w-[99vw] p-10 flex items-center justify-center  ">
      <div className="max-w-[90vw] w-full h-full gap-24 flex  items-center justify-center  border-black flex-col">
        <div className="text-6xl font-extrabold text-center">
          Book Categories
        </div>
        <div className="bg-white w-full items-center flex justify-center gap-10">
          <Slider
            className="w-[105%] flex justify-center items-center  gap-10 "
            ref={(slider) => (sliderRef = slider)}
            {...settings}
          >
            {categoriesArr.map((elem) => {
              return <SingleCategory title={elem.title} image={elem.image} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CategoriesShowCase;
