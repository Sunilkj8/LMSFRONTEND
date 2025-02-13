import React, { useContext, useRef } from "react";
import "./HorizontalScroll.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { BooksRenderContext } from "../../../contexts/BooksRenderContext";
import ImageContainer from "./ImageContainer";
import { Rating } from "@mui/material";
import AniHeart from "../../HeartComponent";
import NestedModal from "../../Modals/MiniBookPopUp";
import { useNavigate } from "react-router-dom";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { inspiringBooks, setInspiringBooks } =
    useContext(BooksRenderContext).inspiringBook;
  const { selectedBooks, setSelectedBook } =
    useContext(BooksRenderContext).selectedBook;

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const navigate = useNavigate();

  return (
    <div className="flex bg-white h-auto flex-col   justify-center items-center w-[99vw]">
      <div className="text-8xl font-extrabold">Explore Books</div>

      <section
        ref={targetRef}
        className="relative flex justify-center  h-[800vh] w-full max-w-[98vw]    "
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className=" flex items-center justify-center gap-10"
          >
            {inspiringBooks.map((elem, idx) => {
              if (idx % 2 == 0)
                return (
                  <div
                    className="   rounded-2xl hover:scale-[1.02] hover:border-black cursor-pointer upliftDiv border border-gray-100  duration-150   overflow-hidden relative  
  hover:border h-[60vh] w-[18vw] py-5 gap-2 flex flex-col"
                  >
                    <div
                      onClick={() => {
                        setSelectedBook(elem);
                        navigate(`/books/${elem.book_name}`);
                      }}
                      className="h-[50%] flex justify-center "
                    >
                      <img
                        src={elem.book_image}
                        className="h-full w-[9vw]"
                        alt=""
                      />
                    </div>
                    <div
                      className={` duration-300 currUpliftDiv cursor-pointer absolute   top-[30vh] z-20 bg-white
 w-full     h-[30vh]  flex    flex-col justify-center  px-10 text-left`}
                    >
                      <div className="font-thin    tracking-widest text-[#F31A52]">
                        Hardcover
                      </div>
                      <div className=" max-h-[50%] overflow-hidden tracking-wide">
                        {elem.book_name}
                      </div>
                      <div className=" text-gray-500 tracking-wide">
                        {elem.book_author}
                      </div>
                      <Rating
                        onClick={async (e) => {
                          console.log(e.target);
                          await axios.post("http://localhost:3001/ratinginfo", {
                            rating: e.target.value,
                            book_name: elem.book_name,
                          });
                        }}
                        className="mt-3"
                        name="size-medium"
                        defaultValue={elem.star_ratings}
                      />

                      {/* <div>Rating Upcoming!</div> */}
                    </div>
                    <div className=" flex justify-between h-[auto] top-[52vh] absolute w-full  ">
                      <AniHeart
                        bookName={elem.book_name}
                        // bookName={elem.book_name}
                        className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative   "
                      />
                      {/* <img
                onClick={() => {
                  setSelectedBook(elem);
                  setMiniModalOpen(true);
                }}
                src={borrow}
                className=" hover:scale-[1.14] cursor-pointer duration-200 h-[7vh] relative left-[-10vw]  "
                alt=""
              /> */}
                      <NestedModal selectedBook={elem} />
                    </div>
                  </div>
                );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;
