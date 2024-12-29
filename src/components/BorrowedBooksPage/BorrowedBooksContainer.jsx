import React from "react";

const BorrowedBooksContainer = ({ userBorrowedBooks }) => {
  return (
    <div className="mt-[10vh] h-screen flex border-2 justify-center ">
      {userBorrowedBooks.map((elem) => {
        return (
          <div className="  flex w-[80vw] h-[40vh] items-center  ">
            <div className="h-[32vh] w-[12vw] bg-black flex justify-center items-center  ">
              <img className="h-[70%] w-[8vw]" src={elem.book_image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BorrowedBooksContainer;
