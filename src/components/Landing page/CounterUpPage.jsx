import React, { useContext, useState } from "react";
import CountUp from "react-countup";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import ScrollTrigger from "react-scroll-trigger";
const CounterUpPage = () => {
  const { inspiringBooks, setInspiringBooks } =
    useContext(BooksRenderContext).inspiringBook;
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="blockElem    relative   h-screen w-[99vw] flex justify-center items-center">
     <div className="statisticsBg   opacity-85     absolute h-full   w-full max-w-[87vw] rounded-3xl   "></div>
      <div className=" bg-gradient-to-r from-[#289ad7b6] to-[#45ab6ecc]    text-white  z-10  rounded-3xl         tracking-widest  h-full max-w-[87vw] w-full flex justify-center items-center">
        <ScrollTrigger
          onEnter={() => {
            setCounterOn(true);
          }}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          <div className=" flex gap-[20vh] flex-col justify-center items-center ">
            <div className=" ">
              {counterOn && (
                <CountUp
                  className="font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#3FDF87] to bg-[#BFF281]"
                  start={0}
                  end={inspiringBooks.length}
                  duration={7}
                />
              )}
              <span className="font-bold text-center tracking-tighter text-9xl"> Books +</span>
            </div>
            <div className="flex gap-10 justify-center items-center">
              <div className="  font-bold tracking-tight text-4xl flex flex-col justify-center gap-5 items-center">
                {counterOn && (
                  <CountUp
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FDF87] to bg-[#BFF281]"
                    start={0}
                    end={
                      useContext(BooksRenderContext).fictionalBook
                        .fictionalBooks.length
                    }
                    duration={10}
                  />
                )}
                <span>Fictional Books</span>
              </div>
              <div className=" tracking-normal font-bold text-4xl flex flex-col justify-center gap-5 items-center">
                {counterOn && (
                  <CountUp
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FDF87] to bg-[#BFF281]"
                    start={0}
                    end={
                      useContext(BooksRenderContext).selfHelpBook.selfHelpBooks
                        .length
                    }
                    duration={10}
                  />
                )}
                <span>Self Help Books</span>
              </div>
            </div>
      
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CounterUpPage;
