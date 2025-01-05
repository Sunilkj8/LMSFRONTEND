import React from "react";

const FictionalBooksRender = ({
  fictionalBooks,
  setSelectedBook,
  setPopUpDiv,
}) => {
  return (
    <div className="  w-auto h-auto mt-7 flex justify-center flex-wrap p-10   mr-[10vw] gap-7 ">
      {fictionalBooks.map((elem, id) => {
        return (
          <>
            <div className=" w-[189px] h-[32vh] relative overflow-hidden    flex items-center justify-center bg-[] fictionalBookContainer flex-col border-[1px] border-gray-300 p-4  ">
              <img src={elem.book_image} className="h-[90%]" alt="" />
              <div
                className={`absolute flex items-center justify-center  h-[10vh] w-full bottom-0 translate-y-[300px] visitBookContent   `}
              >
                <h3
                  className="text-xl  capitalize font-mono cursor-pointer "
                  onClick={() => {
                    setPopUpDiv(true);

                    setSelectedBook(elem);
                    document.body.style.overflowY = "hidden";
                    document.body.style.backgroundColor='gray'
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
