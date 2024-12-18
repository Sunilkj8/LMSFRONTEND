import React from "react";
import atomicHabits from "../../assets/Atomic_habits.jpg";
import crackingTheCodingInterview from "../../assets/crackingTheCodingInterview.jpg";
const InspiringBook = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[200vh]">
      <div className="h-1/2 w-full flex     items-center justify-center">
        <div className="w-1/2   h-full flex items-center justify-center">
          <img src={atomicHabits} alt="" />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {" "}
          <h1 className="text-[4em] ">
            {" "}
            <span className="doubleQuotes">"</span>Habits are the compound
            interest of self-improvement.{" "}
            <span className="doubleQuotes">"</span>
          </h1>
        </div>
      </div>
      <div className="h-1/2 w-full flex      items-center mt-4 justify-center p-24 ">
        <div className="w-1/2   h-full flex items-center justify-center">
          <h1 className="text-[4em] ">
            {" "}
            <span className="doubleQuotes">"</span>Unleash your coding
            potential, ace the tech interview.
            <span className="doubleQuotes">"</span>
          </h1>{" "}
        </div>
        <div className="w-1/2 flex items-center justify-center h-full">
          {" "}
          <img className="h-full" src={crackingTheCodingInterview} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InspiringBook;
