import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import axios from "axios";

const MarqueeSlider = () => {
  const { inspiringBooks, setInspiringBooks } =
    useContext(BooksRenderContext).inspiringBook;
  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);

  async function getTotalBorrowedBooks() {
    const res = await axios.get("http://localhost:3001/totalborrowedbooks");
    setTotalBorrowedBooks(res.data);
  }
  async function getTotalUsers() {
    const res = await axios.get("http://localhost:3001/getuserinfo");
    setTotalUsers(res.data);
  }

  useEffect(() => {
    getTotalBorrowedBooks();
    getTotalUsers();
  }, []);

  return (
    <div className="mt-24 h-[50vh] gap-10 flex-col w-[99vw] flex justify-center items-center">
      {" "}
      <Marquee speed={280} className="h-full w-full">
        <div className="ml-16 flex gap-20 justify-center items-center">
          <div className="text-9xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold overflow-hidden p-4">
            Connecting readers with the right resources, instantly
          </div>

          {/* <div className="p-4 overflow-hidden h-full text-center flex items-center flex-col">
            <div className="text-8xl font-extrabold">
              {inspiringBooks.length}
            </div>
            <div className="text-gray-600 text-2xl">Books+</div>
          </div> */}
        </div>
      </Marquee>
      {/* <Marquee speed={140} direction="right" className="h-full w-full">
        <div className="ml-96 flex gap-20 justify-center items-center">
          <div className="p-4 overflow-hidden  h-full text-center flex items-center flex-col ">
            <div className="text-8xl text-center font-extrabold">
              {inspiringBooks.length}
            </div>
            <div className="text-gray-800 text-3xl text-center  ">Books</div>
          </div>
          <div className="p-4 overflow-hidden h-full text-center flex items-center flex-col ml-80">
            <div className="text-8xl text-center font-extrabold">
              {totalBorrowedBooks.length}
            </div>
            <div className="text-gray-800 text-3xl text-center  ">
              Books Borrowed
            </div>
          </div>
          <div className="p-4 overflow-hidden h-full text-center flex items-center flex-col ml-80">
            <div className="text-8xl text-center font-extrabold">
              {totalUsers.length}
            </div>
            <div className="text-gray-800 text-3xl text-center  ">Users</div>
          </div>
          <div className="p-4 overflow-hidden h-full text-center flex items-center flex-col ml-80">
            <div className="text-8xl text-center font-extrabold">
             10+
            </div>
            <div className="text-gray-800 text-3xl text-center  ">Categories</div>
          </div>

          <div className="p-4 overflow-hidden h-full text-center flex items-center flex-col ml-80">
            <div className="text-8xl text-center font-extrabold">
             More Than 60%
            </div>
            <div className="text-gray-800 text-3xl text-center  ">Books are Five star rated</div>
          </div>
        </div>
      </Marquee> */}
    </div>
  );
};

export default MarqueeSlider;
