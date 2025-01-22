import React, { useState } from "react";

const Accordion = ({ getCurrentBooks }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className={`py-1 w-[25%] duration-300  ease-in-out transition-all flex flex-col   border-[1px]  px-3  overflow-hidden 
        ${accordionOpen ? "h-[60vh]" : "h-[10vh]"} `}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full  p-5 border-black"
      >
        <span className="text-xl flex justify-center items-center font-extralight">
          Categories
        </span>
        <span className="text-2xl font-thin">{accordionOpen ? "-" : "+"}</span>
      </button>
      <div className="p-5 font-thin flex flex-col gap-6 text-lg ">
        <span
          onClick={(e) => {
            // console.log(e.target.textContent);
            getCurrentBooks(e.target.textContent);
          }}
          className="hover:text-red-500 cursor-pointer duration-200 text-gray-700"
        >
          Fictional
        </span>
        <span
          onClick={(e) => {
            // console.log(e.target.textContent);
            getCurrentBooks(e.target.textContent);
          }}
          className="hover:text-red-500 cursor-pointer duration-200 text-gray-700"
        >
          Self Help
        </span>
        <span
          onClick={(e) => {
            // console.log(e.target.textContent);
            getCurrentBooks(e.target.textContent);
          }}
          className="hover:text-red-500 cursor-pointer duration-200 text-gray-700"
        >
          Autobiography
        </span>
        <span
          onClick={(e) => {
            // console.log(e.target.textContent);
            getCurrentBooks(e.target.textContent);
          }}
          className="hover:text-red-500 cursor-pointer duration-200 text-gray-700"
        >
          Comic
        </span>
        <span
          onClick={(e) => {
            // console.log(e.target.textContent);
            getCurrentBooks(e.target.textContent);
          }}
          className="hover:text-red-500 cursor-pointer duration-200 text-gray-700"
        >
          Programming
        </span>
      </div>
    </div>
  );
};

export default Accordion;
