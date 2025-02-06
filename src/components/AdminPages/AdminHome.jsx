import React, { useContext, useEffect, useState } from "react";
import BooksChart from "./Charts/BooksChart";
import books from "../../assets/books.png";
import borrow from "../../assets/borrow.png";
import userIcon from "../../assets/profile-user.png";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import axios from "axios";
import BookForm from "./BookForm";

const AdminHome = () => {
  const { fictionalBook, selfHelpBook, inspiringBook } =
    useContext(BooksRenderContext);

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

  

  console.log(totalBorrowedBooks);

  return (
    <div className="h-auto w-[99vw]  bg-[#F1F5F9] flex justify-center items-center">
      <div className="h-[300vh]   w-full p-8 flex flex-col text-black   rounded-xl items-center gap-10  ">
        <div className=" w-full text-4xl  font-semibold   text-center flex    ">
          Library Dashboard{" "}
        </div>
        <div className="max-w-[80vw] shadow-2xl  bg-white w-full h-[30vh] rounded-lg items-center flex gap-10 px-10">
          <div className="w-[30%] rounded-lg h-[80%] flex p-5 flex-col   gap-4 bg-[#EFF3FF] justify-center">
            <img src={books} className="h-[35%] w-[14%]" alt="" />
            <div className="text-xl ">Total Books</div>
            <div className="text-2xl font-semibold">
              {inspiringBook.inspiringBooks.length}
            </div>
          </div>
          <div className="w-[30%] rounded-lg p-5 gap-4 justify-center flex flex-col h-[80%] bg-[#ECFDF3]">
            <img src={borrow} className="h-[45%] w-[19%]" alt="" />
            <div className="text-xl ">Total Borrowed Books</div>
            <div className="text-2xl font-semibold">
              {totalBorrowedBooks.length}
            </div>
          </div>
          <div className="w-[30%] rounded-lg p-5 gap-4 justify-center flex flex-col h-[80%] bg-[#FEF2F2]">
            <img src={userIcon} className="h-[35%] w-[15%]" alt="" />
            <div className="text-xl ">Total Users</div>
            <div className="text-2xl font-semibold">{totalUsers.length}</div>
          </div>{" "}
        </div>

        <div className="bg-white shadow-2xl p-5 h-[30%] justify-center rounded-3xl w-[80%] flex-col mt-24  gap-10 items-center     flex">
          <div className="text-3xl font-semibold">Book Categories </div>
          <div className="flex">
            <div>
              <BooksChart />
            </div>
          </div>
        </div>

        <div className="bg-white w-[90%] p-5 flex flex-col gap-10 h-[100vh] rounded-3xl shadow-2xl  ">
          <div className="text-4xl font-bold text-center">Add Book</div>
           <BookForm/>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
