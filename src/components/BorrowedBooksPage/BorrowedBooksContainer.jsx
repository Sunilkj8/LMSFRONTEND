import React, { useContext } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";

const BorrowedBooksContainer = () => {
  const { borrowedBooks, setBorrowedBooks } =
    useContext(BooksRenderContext).borrowedBook;
    console.log(borrowedBooks);
    
  return (
    <div className="h-auto w-[99vw] mt-24 p-10 flex flex-wrap justify-center gap-10">
      {borrowedBooks.map((elem) => {
       return <div className="card bg-base-100 w-[28vw] h-[65vh] shadow-xl">
          <figure className="">
            <img
              src={elem.book_image}
              alt="Shoes"
              className="h-[80%]"
            />
          </figure>
          <div className="card-body bg-white">
            <h2 className="card-title">
              {elem.book_name}
             </h2>
            <p className="text-gray-500">{elem.book_author}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{elem.returnon?elem.returnon:'no-date'}</div>
             </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default BorrowedBooksContainer;
