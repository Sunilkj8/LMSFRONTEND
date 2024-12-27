import React from "react";

const FictionalBooksRender = ({
  fictionalBooks,
  setSelectedBook,
  setPopUpDiv,
}) => {
  return (
    <div className="  w-auto h-auto mt-7 flex justify-center flex-wrap gap-[40px] px-[20vw] ">
      {fictionalBooks.map((elem, id) => {
        return (
          <>
            <div className=" w-[189px] h-[32vh] relative overflow-hidden  border-2 flex items-center justify-center bg-[#F2F2F2] fictionalBookContainer">
              <img src={elem.book_image} className="h-[80%]" alt="" />
              <div
                className={`absolute flex items-center justify-center  h-[10vh] w-full bottom-0 translate-y-[300px] visitBookContent   `}
              >
                <h3
                  className="text-xl  capitalize font-mono cursor-pointer "
                  onClick={() => {
                    setPopUpDiv(true);

                    setSelectedBook(elem);
                    document.body.style.overflowY = "hidden";
                  }}
                >
                  Visit Book
                </h3>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FictionalBooksRender;
