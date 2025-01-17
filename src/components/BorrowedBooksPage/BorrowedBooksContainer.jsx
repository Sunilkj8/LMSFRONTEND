import React from "react";

const BorrowedBooksContainer = ({ userBorrowedBooks }) => {
  return (
    <div className="mt-[10vh] h-auto items-center  flex justify-center overflow-hidden flex-wrap gap-10 bg-[] py-10     ">
      {userBorrowedBooks.map((elem) => {
        return (
          <div className="  flex w-[20vw] h-[50vh] items-center justify-between cursor-default   duration-300 bg-white  px-2 flex-col shadow-lg">
            <div className="h[10%] p-7   w-[60%]  flex justify-center items-center">
              <img className="w-full h-full" src={elem.book_image} alt="" />
            </div>
            <div className="flex justify-center h-[70%] flex-col gap-3  ">
              <div className="">
                <h1 className="text-center">{elem.book_name}</h1>
              </div>
              {/* <div className="  flex items-center justify-center">
                <p className="w-auto text-center ">{elem.book_description}</p>
              </div> */}
              <div className="flex justify-center">
                <h2>Return - {elem.returnon}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BorrowedBooksContainer;
