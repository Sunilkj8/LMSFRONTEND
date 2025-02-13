import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);

  // console.log(loginClickState);

  return (
    <>
      {" "}
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4   text-black top-0 left-0 right-0 z-50 font-medium`}
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
            <a
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer text-3xl text-black "
            >
              bookVault
            </a>
          </div>
          <div className="navbar-end  ">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className="px-2">
                  <NavLink
                    
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="px-2">
                  <NavLink
                    
                    to={"/books"}
                  >
                    Books
                  </NavLink>
                </li>
                <li className="px-2">
                  <NavLink
                     
                    to={"/borrowedbooks"}
                  >
                    Borrowed Books
                  </NavLink>
                </li>
              </ul>
              <label className=" input input-bordered flex items-center gap-2 bg-transparent mx-10 outline-none ">
                <input
                  type="text"
                  className="grow placeholder:text-black "
                  placeholder="Search"
                  onChange={(e) => {
                    setCurrSearch(e.target.value);
                    navigate("/books");
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
                      <h1 className="text-white text-3xl relative bottom-[5px] left-[4.5px] font-light h-[25px] w-[25px]  ">
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
                  <div className=" rounded-md flex items-center flex-col z-40    bg-black text-white h-[25vh] absolute gap-2 top-16 w-[10rem] left-[79vw] p-2">
                    <h1 className="capitalize text-xl">{username}</h1>
                    <h1 className="capitalize text-base">
                      {" "}
                      <NavLink
                        className={
                          "transition-all duration-300 hover:text-red-500"
                        }
                        to={"/books"}
                      >
                        Books
                      </NavLink>
                    </h1>
                    <h1 className="capitalize text-base">
                      {" "}
                      <NavLink
                        className={
                          "transition-all duration-300 hover:text-red-500"
                        }
                        to={"/borrowedbooks"}
                      >
                        borrowedbooks
                      </NavLink>
                    </h1>
                    <h1 className="capitalize text-base">
                      <NavLink
                        className={
                          "transition-all duration-300 hover:text-red-500"
                        }
                        to={"/favorites"}
                      >
                        Favorites
                      </NavLink>
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
