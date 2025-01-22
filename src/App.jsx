import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BorrowedBooks from "./pages/BorrowedBooks";
import { IsLoginClicked } from "./contexts/LoginContext";
import { BooksRenderContext } from "./contexts/BooksRenderContext";
import axios from "axios";
import Admin from "./pages/Admin";
import AdminHome from "./components/AdminPages/AdminHome";

const App = () => {
  const [selectedBook, setSelectedBook] = useState([]);
  const [fictionalBooks, setFictionalBooks] = useState([]);
  const [selfHelpBooks, setSelfHelpBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [inspiringBooks, setInspiringBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState("Fictional");

  const getFictionalBooks = async () => {
    const res = await axios.get("http://localhost:3001/fictionalbooks");
    setFictionalBooks(res.data);
  };

  const getSelfHelpBooks = async () => {
    const res = await axios.get("http://localhost:3001/selfhelpbooks");
    setSelfHelpBooks(res.data);
  };

  const getInspiringBooks = async () => {
    const res = await axios.get("http://localhost:3001/inspiringbooks");
    console.log(res.data);
    setInspiringBooks(res.data);
    setCurrentBooks(res.data);

  };

  async function getUserBorrowedBooks() {
    const user_id = localStorage.getItem("user_id");
    const res = await axios.post("http://localhost:3001/getborrowedbooks", {
      user_id: user_id,
    });

    // console.log(res.data);
    // gives an array of objects...
    // setUserBorrowedBooks(res.data);
    setBorrowedBooks(res.data);
  }
  useEffect(() => {
    // getFeaturedBooks();
    getFictionalBooks();
    getSelfHelpBooks();
    getInspiringBooks();
    getUserBorrowedBooks();
  }, []);

  const router = createBrowserRouter([
    localStorage.getItem("usertype") != "admin"
      ? {
          path: "/",
          element: <RootLayout />,

          children: [
            { index: true, element: <Home /> },
            { path: "/books", element: <Books /> },
            { path: "/borrowedbooks", element: <BorrowedBooks /> },
          ],
        }
      : {
          path: "/",
          element: <Admin />,
          children: [{ index: true, element: <AdminHome /> }],
        },
  ]);
  const [loginClickState, setLoginClickState] = useState(false);
  return (
    <BooksRenderContext.Provider
      value={{
        selectedBook: { selectedBook, setSelectedBook },
        fictionalBook: { fictionalBooks, setFictionalBooks },
        selfHelpBook: { selfHelpBooks, setSelfHelpBooks },
        currentBook: { currentBooks, setCurrentBooks },
        inspiringBook: { inspiringBooks, setInspiringBooks },
        borrowedBook: { borrowedBooks, setBorrowedBooks },
        filteredBook: { filteredBooks, setFilteredBooks },
      }}
    >
      <IsLoginClicked.Provider value={{ loginClickState, setLoginClickState }}>
        <RouterProvider router={router} />
      </IsLoginClicked.Provider>
    </BooksRenderContext.Provider>
  );
};

export default App;
