import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Heart from "react-animated-heart";
import { BooksRenderContext } from "../contexts/BooksRenderContext";

export default function AniHeart({ bookName }) {
  const [isClick, setClick] = useState(false);
  // console.log(bookName);
  const { inspiringBooks, setInspiringBooks } =
    useContext(BooksRenderContext).inspiringBook;
  console.log(inspiringBooks);

  const [isFav, setIsFav] = useState(false);

  function checkIsFav() {
    inspiringBooks.forEach((elem) => {
      if (elem.book_name == bookName && elem.isfavourite == true) {
        // console.log(true);
        setIsFav(true);
      }
    });
  }

  useEffect(() => {
    checkIsFav();
  }, []);

  return (
    <div className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative left-[12vw] bottom-5  ">
      <Heart
        isClick={isFav ? true : isClick}
        onClick={(e) => {
          // console.log(e.target);
          // console.log(bookName);
          console.log(isClick);

          axios.post("http://localhost:3001/favoriteinfo", {
            bookName,
            isFavorite: !isClick,
          });
          setClick(!isClick);
        }}
      />
    </div>
  );
}
