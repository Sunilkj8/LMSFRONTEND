import React, { useContext, useEffect, useState } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import borrow from "../../assets/borrow.png";
import AniHeart from "../HeartComponent";
import NestedModal from "../Modals/BookPopUp";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { selectedBook, setSelectedBook } =
    useContext(BooksRenderContext).selectedBook;
  console.log(selectedBook);
  const navigate = useNavigate();
  const [currReviews, setCurrReviews] = useState([]);
  const getReviews = async () => {
    const response = await axios.get("http://localhost:3001/getreviews");

    setCurrReviews(response.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  // console.log(currReviews);

  return (
    <>
      <div className="flex justify-center items-center h-auto w-[99vw] flex-col gap-16 ">
        <div className="   text-black  px-5 py-10 max-w-[90vw] w-full h-full   flex gap-14">
          <div className="flex flex-col gap-10 justify-center items-center w-[25%]   rounded-xl p-10     h-[70vh] relative">
            {" "}
            <div className="top-12  right-44 absolute">
              <AniHeart bookName={selectedBook.book_name} />
            </div>
            <img
              className="  p-5 rounded-sm"
              src={selectedBook.book_image}
              alt=""
            />
          </div>
          <div className="flex gap-10   p-10 w-[60%]   flex-col items-center">
            <div className="text-4xl capitalize font-bold">
              {selectedBook.book_name}
            </div>
            <div className="text-2xl text-gray-600 capitalize font-semibold">
              ~ {selectedBook.book_author}
            </div>
            <div className="text-xl text-center  capitalize font-semibold">
              {selectedBook.book_description}
            </div>
            <div className="  flex justify-center items-center h-auto     gap-10   ">
              <NestedModal selectedBook={selectedBook} />
            </div>
          </div>
        </div>
        <div className="  relative left-[-35vw]  h-[50vh] bottom-24 p-10 w-[30%]">
          <div className="h-[20vh] flex flex-col items-center  gap-5">
            <div className="capitalize text-center text-xl ">
              Review this book
            </div>
            <div
              onClick={() => {
                navigate(`/books/${selectedBook.book_name}/write-review`);
              }}
              className="border border-black p-3 cursor-pointer rounded-xl hover:scale-[1.09] duration-150 "
            >
              Write a Review
            </div>
          </div>
        </div>

        <div className="flex flex-col absolute  p-10  left-[35vw]  top-[80vh] gap-14   ">
          {currReviews.map((elem) => {
            if (elem.book_id == selectedBook.book_id)
              return (
                <div className="  p-10 shadow-xl rounded-3xl border-black w-[50vw] font-semibold flex flex-col gap-5 text-white bg-black">
                  <div className="font-thin text-xl flex gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                      {elem.username}
                   </div>
                  <div className="text-2xl">{elem.review_headline}</div>
                  <div className="font-thin">{elem.review_description}</div>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
};

export default BookDetails;
