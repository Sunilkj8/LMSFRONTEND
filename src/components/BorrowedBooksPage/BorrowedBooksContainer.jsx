import React from "react";

const BorrowedBooksContainer = ({ userBorrowedBooks }) => {
  return (
    <div className="mt-[10vh] h-auto items-center  flex justify-center flex-col gap-10 bg-[] py-10     ">
      {userBorrowedBooks.map((elem) => {
        return (
          <div className="  flex w-[70vw] h-[20%] items-center justify-between    rounded-lg hover:scale-[1.05] cursor-pointer duration-300 bg-white px-5">
            <div className="h[50%] p-7   w-[17vw]  flex justify-center items-center">
              <img className="w-full h-full" src={elem.book_image} alt="" />
            </div>
            <div className="flex justify-center flex-col gap-10 ">
              <div className="">
                <h1 className="text-center">{elem.book_name}</h1>
              </div>
              <div className="  flex items-center justify-center">
                <p className="w-auto text-center ">{elem.book_description}</p>
              </div>
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
