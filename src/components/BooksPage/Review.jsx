import React, { useContext, useState } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const { selectedBook } = useContext(BooksRenderContext).selectedBook;
  const [review, setReview] = useState({
    review_headline: "",
    review_description: "",
  });

  const navigate = useNavigate();

  //   console.log(review);

  return (
    <div className="flex flex-col items-center gap-10 justify-center p-10 mt-10 ">
      <div className="text-4xl font-bold">Write a Review</div>
      <div className="text-2xl font-semibold gap-10 items-center justify-center flex   border-black p-5 rounded-md">
        <img src={selectedBook.book_image} className="h-[20vh]" alt="" />
        <span>{selectedBook.book_name}</span>
      </div>
      <div className="flex flex-col gap-5   border-gray-300   p-5">
        <div className="text-2xl font-semibold">Add A Headline</div>
        <div>
          <input
            name="review_headline"
            onChange={(e) => {
              setReview((prevVal) => {
                return {
                  ...prevVal,
                  [e.target.name]: e.target.value,
                };
              });
            }}
            
            value={review.review_headline}
            type="text"
            placeholder="What's Important To know!"
            className="bg-white border border-black rounded-sm w-[30vw] outline-none p-2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5  border-gray-300 p-5">
        <div className="text-2xl font-semibold">Add A Written Review</div>
        <div>
          <textarea
            name="review_description"
            onChange={(e) => {
              setReview((prevVal) => {
                return {
                  ...prevVal,
                  [e.target.name]: e.target.value,
                };
              });
            }}
            value={review.review_description}
            cols={40}
            rows={6}
            type="text"
            placeholder="What Did You Like Or Dislike?"
            className="bg-white border border-black rounded-sm w-[30vw] outline-none p-2"
          />
        </div>
      </div>

      <div
        onClick={() => {
          axios.post("http://localhost:3001/reviews", {
            book_id: selectedBook.book_id,
            review_headline: review.review_headline,
            review_description: review.review_description,
            username: localStorage.getItem("username"),
          });
          setReview({ review_headline: "", review_description: "" });

          toast.success("Review submitted!");

          navigate(-1);
        }}
        className="p-3 bg-black text-white rounded-md cursor-pointer"
      >
        Submit{" "}
      </div>
    </div>
  );
};

export default Review;
