import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BorrowedBooks from "./pages/BorrowedBooks";
import { IsLoginClicked } from "./contexts/LoginContext";

const App = () => {
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
    <IsLoginClicked.Provider value={{ loginClickState, setLoginClickState }}>
      <RouterProvider router={router} />
    </IsLoginClicked.Provider>
  );
};

export default App;
