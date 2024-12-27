import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import StaticNavbar from "../components/StaticNavbar";
import FictionalBooks from "../components/BooksPage/FictionalBooks";
import SelfHelpBooks from "../components/BooksPage/SelfHelpBooks";
import LoginModal from "../components/Modals/LoginModal";
import { IsLoginClicked } from "../contexts/LoginContext";
const Books = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [fictionalBooks, setFictionalBooks] = useState([]);
  const [selfHelpBooks, setSelfHelpBooks] = useState([]);
  const getFictionalBooks = async () => {
    const res = await axios.get("http://localhost:3001/fictionalbooks");
    setFictionalBooks(res.data);
  };
  console.log(fictionalBooks);

  const getFeaturedBooks = async () => {
    const res = await axios.get("http://localhost:3001/featuredbooks");
    // console.log(res.data);
    setFeaturedBooks(res.data);
  };
  console.log(featuredBooks);

  const getSelfHelpBooks = async () => {
    const res = await axios.get("http://localhost:3001/selfhelpbooks");
    setSelfHelpBooks(res.data);
  };

  useEffect(() => {
    // getFeaturedBooks();
    getFictionalBooks();
    getSelfHelpBooks();
  }, []);

  const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);
  console.log(loginClickState);

  return (
    <>
      {/* Banner image */}
      <div className="flex h-[88vh] w-[99vw] justify-center ">
        <div className="booksImageContainer rounded-lg h-[70vh] w-[95vw] flex text-center items-center justify-start ">
          <div className="justify-center    text-black   font-extrabold   h-full flex items-center w-full  ">
            <h1 className="uppercase text-9xl  tracking-widest">
              Explore Books
            </h1>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full flex-col gap-6 pb-32">
        {/* Fictional Fictional Books */}
        <FictionalBooks fictionalBooks={fictionalBooks} />
        {/* Self Help books   */}
        {/* <SelfHelpBooks selfHelpBooks={selfHelpBooks} /> */}
      </div>
    </>
  );
};

export default Books;
