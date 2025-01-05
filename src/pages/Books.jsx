import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IsLoginClicked } from "../contexts/LoginContext";
import CurrentBooksContainer from "../components/BooksPage/CurrentBooksContainer";
import Accordion from "../components/BooksPage/Accordion";
import { Link } from "react-router-dom";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
const Books = () => {
  // const [fictionalBooks, setFictionalBooks] = useState([]);
  // const [selfHelpBooks, setSelfHelpBooks] = useState([]);
  // const [currentBooks, setCurrentBooks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Fictional");
  const getFictionalBooks = async () => {
    const res = await axios.get("http://localhost:3001/fictionalbooks");
    setFictionalBooks(res.data);
    setCurrentBooks(res.data);
  };
  // console.log(fictionalBooks);

  const getSelfHelpBooks = async () => {
    const res = await axios.get("http://localhost:3001/selfhelpbooks");
    setSelfHelpBooks(res.data);
  };

  // useEffect(() => {
  //   // getFeaturedBooks();
  //   getFictionalBooks();
  //   getSelfHelpBooks();
  // }, []);

  // const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);
  // console.log(loginClickState);
  const { fictionalBook, selfHelpBook, currentBook } =
    useContext(BooksRenderContext);
 
  function getCurrentBooks(books) {
    console.log(books);

    if (books == "Fictional") {
      currentBook.setCurrentBooks(fictionalBook.fictionalBooks);
      setCurrentCategory("Fictional");
    } else if (books == "Self Help") {
      currentBook.setCurrentBooks(selfHelpBook.selfHelpBooks);
      setCurrentCategory("Self Help");
    }
  }
  // getCurrentBooks()
  // console.log(useContext(BooksRenderContext));

  return (
    <>
      <div className="border-t-2 mt-[10vh] border-b-2 h-[10vh] flex items-center px-32">
        <Link to={"/"} className="hover:text-red-400 cursor-pointer">
          Home
        </Link>{" "}
        <span className="ml-2"> > {currentCategory} </span>
      </div>
      <div className=" flex h-auto mt-[5vh] w-[99vw]    px-[3vw] py-[7vh] gap-10">
        <Accordion getCurrentBooks={getCurrentBooks} />
        <div className="h-[200vh] w-[70%] p-3">
          <CurrentBooksContainer border={true} currentBooks={currentBook.currentBooks} />
        </div>
      </div>
    </>
  );
};

export default Books;
