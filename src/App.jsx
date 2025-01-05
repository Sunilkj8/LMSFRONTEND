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

const App = () => {
  const [fictionalBooks, setFictionalBooks] = useState([]);
  const [selfHelpBooks, setSelfHelpBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [inspiringBooks, setInspiringBooks] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState("Fictional");

  const getFictionalBooks = async () => {
    const res = await axios.get("http://localhost:3001/fictionalbooks");
    setFictionalBooks(res.data);
    setCurrentBooks(res.data);
  };

  const getSelfHelpBooks = async () => {
    const res = await axios.get("http://localhost:3001/selfhelpbooks");
    setSelfHelpBooks(res.data);
  };

  const getInspiringBooks = async () => {
    const res = await axios.get("http://localhost:3001/inspiringbooks");
    console.log(res.data);
    setInspiringBooks(res.data);
  };
  useEffect(() => {
    // getFeaturedBooks();
    getFictionalBooks();
    getSelfHelpBooks();
    getInspiringBooks();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        { index: true, element: <Home /> },
        { path: "/books", element: <Books /> },
        { path: "/borrowedbooks", element: <BorrowedBooks /> },
      ],
    },
  ]);
  const [loginClickState, setLoginClickState] = useState(false);
  return (
    <BooksRenderContext.Provider
      value={{
        fictionalBook: { fictionalBooks, setFictionalBooks },
        selfHelpBook: { selfHelpBooks, setSelfHelpBooks },
        currentBook: { currentBooks, setCurrentBooks },
        inspiringBook: { inspiringBooks, setInspiringBooks },
      }}
    >
      <IsLoginClicked.Provider value={{ loginClickState, setLoginClickState }}>
        <RouterProvider router={router} />
      </IsLoginClicked.Provider>
    </BooksRenderContext.Provider>
  );
};

export default App;
