import React from "react";

const CurrentBooksContainer = ({ currentBooks, border }) => {
  console.log(currentBooks);

  return (
    <div className="h-auto w-full   justify-center gap-1    flex flex-wrap  ">
      {currentBooks.map((elem) => {
        return (
          <div
            className={` ${
              border ? "border" : ""
            }  cursor-pointer    w-[15vw] flex items-center gap-10 p-3 h-[55vh] flex-col montserrat-font   card-hover-transition   relative   overflow-hidden `}
          >
            <div className="justify-center w-[80%] flex h-[60%]  rounded-lg items-center p-3">
              <img
                src={elem.book_image}
                className="w-[90%] h-[90%] rounded-sm"
                alt=""
              />
            </div>
            {/* <div className="text-red-500 font-extrabold  uppercase absolute bottom-[-1000px] ">Paperback</div> */}
            <div className="font-extrabold">{elem.book_name}</div>
            <div>{elem.book_author}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentBooksContainer;
