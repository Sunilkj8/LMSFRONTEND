import React from "react";

const FictionalBooksPopUpDivContainer = ({
  setPopUpDiv,
  selectedBook,
  setBorrowBookPopUp,
  popUpDiv,
}) => {
  return (
    <div
      className={`fixed h-[93%] w-[75vw] bg-[white] rounded-md    justify center items-center flex-col top-0 left-[12vw] py-20 duration-300 transition-all ease-in-out z-50    ${
        popUpDiv ? "flex bg-white scale-75" : "scale-0 "
      } `}
    >
      <div
        className="absolute left-[70vw] top-[3vh]  cursor-pointer"
        onClick={() => {
          setPopUpDiv(false);
          document.body.style.overflowY = "scroll";
        }}
      >
        <svg width="40" height="40" viewbox="0 0 40 40">
          <path
            d="M 10,10 L 30,30 M 30,10 L 10,30"
            stroke="black"
            stroke-width="4"
          />
        </svg>
      </div>
      <div>
        <div className="absolute left-[2vw] top-[10vh] h-[80%] flex justify-center p-[50px]   w-[50%]">
          <img
            className="shadow-2xl"
            src={selectedBook ? selectedBook.book_image : ""}
            alt=""
          />
        </div>
        <div
          className="relative left-[39vw] h-full  top-[8vh]  w-[44%] flex  gap-24 flex-col items-center montserrat-font
      
    "
        >
          <div>
            <h1 className="text-4xl font-bold text-center   capitalize">
              {selectedBook ? selectedBook.book_name : ""}
            </h1>
          </div>
          <div>
            <p className="text-center font-bold text-xl">
              {" "}
              {selectedBook ? selectedBook.book_description : ""}
            </p>
          </div>
          <div
            className="bg-black p-4 rounded-lg text-white font-mono text-2xl uppercase cursor-pointer"
            onClick={() => {
              setBorrowBookPopUp(true);
              document.body.style.overflowY = "hidden";

            }}
          >
            Borrow Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default FictionalBooksPopUpDivContainer;
