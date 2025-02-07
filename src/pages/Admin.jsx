import React from "react";
import { Outlet } from "react-router-dom";
import TemporaryDrawer from "../components/AdminPages/Drawer";

const Admin = () => {
  return (
    <>
      <div className="border-b   border-black py-5 px-28 w-full text-4xl justify-between  font-semibold   text-center flex    ">
        <span>
          <TemporaryDrawer />
        </span>
        <span>Library Dashboard</span>{" "}
        {/* <span
            className="bg-black p-3 text-white rounded-xl cursor-pointer text-xl"
            onClick={() => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("username");
              localStorage.removeItem("usertype");
              location.reload()
            }}
          >
            Logout
          </span> */}
      </div>
      <Outlet />
    </>
  );
};

export default Admin;
