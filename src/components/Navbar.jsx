import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IsLoginClicked } from "../contexts/LoginContext";
import { getLocalUsername } from "../helperFunctions/localstorage";
import userProfileIcon from "../assets/profile-user.png";
const Navbar = ({ inspiringBooks, setInspiringBooks, setCurrentBooks }) => {
  const [sticky, setSticky] = useState(false);
  const username = getLocalUsername();
  const [profileDropDown, setProfileDropDown] = useState(false);
  const [currSearch, setCurrSearch] = useState("");
  // const profileDropDownREF = useRef();
  // console.log(username);
  // console.log(currSearch);

  function getFilteredBooks() {
    setCurrentBooks(
      inspiringBooks.filter((book) => {
        return book.book_name.toLowerCase().includes(currSearch.toLowerCase());
      })
    );
  }
  // console.log(filteredBooks);
  // setFilteredBooks(filteredBooks);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getFilteredBooks();
  }, [currSearch]);
 

  const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);

  // console.log(loginClickState);

  return (
    <>
      {" "}
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4 fixed text-black top-0 left-0 right-0 z-50 font-medium ${
          sticky
            ? "sticky shadow-md bg-gray-100 duration-300 transition-all ease-in-out z-20"
            : ""
        }`}
      >
        <div className="navbar   ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {/* <NavLink>Home</NavLink> */}
                <li>
                  <a>Books</a>
                </li>
                <li>
                  <a>Borrowed Books</a>
                </li>
              </ul>
            </div>
            <a className=" text-3xl text-black ">bookVault</a>
          </div>
          <div className="navbar-end  ">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className="px-2">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="px-2">
                  <NavLink to={"/books"}>Books</NavLink>
                </li>
                <li className="px-2">
                  <NavLink to={"/borrowedbooks"}>Borrowed Books</NavLink>
                </li>
              </ul>
              <label className=" input input-bordered flex items-center gap-2 bg-transparent mx-10 outline-none ">
                <input
                  type="text"
                  className="grow placeholder:text-black "
                  placeholder="Search"
                  onChange={(e) => {
                    setCurrSearch(e.target.value);
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label className="swap swap-rotate mx-8">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-7 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-7 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {username ? (
              <>
                <div
                  onClick={() => {
                    setProfileDropDown(!profileDropDown);
                  }}
                  className="bg-black rounded-full p-2 cursor-pointer relative "
                >
                  {profileDropDown ? (
                    <div className="flex items-center justify-center">
                      <h1 className="text-white text-3xl relative bottom-1 left-[3px] font-light h-[25px] w-[25px]  ">
                        &times;
                      </h1>
                    </div>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-user size-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="8" r="4"></circle>
                    </svg>
                  )}
                </div>
                {profileDropDown ? (
                  <div className=" rounded-md flex items-center flex-col    bg-black text-white h-[25vh] absolute gap-2 top-16 w-[10rem] left-[71vw] p-2">
                    <h1 className="capitalize text-xl">{username}</h1>
                    <h1 className="capitalize text-base">
                      {" "}
                      <NavLink to={"/books"}>Books</NavLink>
                    </h1>
                    <h1 className="capitalize text-base">
                      {" "}
                      <NavLink to={"/borrowedbooks"}>borrowedbooks</NavLink>
                    </h1>

                    <span
                      onClick={() => {
                        localStorage.removeItem("username");
                        localStorage.removeItem("user_id");

                        location.reload();
                      }}
                      class="flex items-center gap-2 text-base  cursor-pointer transition-all duration-300 hover:text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-log-out size-4"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                      </svg>
                      Logout
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              <a
                onClick={() => {
                  setLoginClickState(true);
                }}
                className="bg-black text-white p-2 cursor-pointer rounded-md hover:bg-gray-700 duration-300 w-[4vw] flex items-center justify-center"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
