import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import LoginModal from "./Modals/LoginModal";
import { IsLoginClicked } from "../contexts/LoginContext";

const RootLayout = () => {
  const {loginClickState, setLoginClickState} = useContext(IsLoginClicked);
  return (
    <>
      <Navbar />

      {loginClickState && <LoginModal />}
      <Outlet />
    </>
  );
};

export default RootLayout;
