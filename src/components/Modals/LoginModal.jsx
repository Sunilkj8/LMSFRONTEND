import React, { useContext, useEffect, useState } from "react";
import { IsLoginClicked } from "../../contexts/LoginContext";
import axios from "axios";
import { Link } from "react-scroll";
// import ReactModal from "react-modal";
const LoginModal = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [signInState, setSignInState] = useState("Login");
  console.log(loginInfo);
  async function getLoginInfo(e) {
    // console.log(e.target.textContent);

    if (e.target.textContent == "Login") {
      const res = await axios.post("http://localhost:3002/signin", loginInfo);
      console.log(res.data);
      const userNameResponse = await axios.get("http://localhost:3002/me", {
        headers: { token: res.data },
      });
      console.log(userNameResponse.data.username);
      localStorage.setItem("username", userNameResponse.data.username);
      location.reload();
    } else {
      const res = await axios.post("http://localhost:3002/signup", loginInfo);
      console.log(res.data);
    }
  }
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    // getLoginInfo();
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const { loginClickState, setLoginClickState } = useContext(IsLoginClicked);
  return (
    <>
      <div className={`fixed blurBG left-0 right-0 top-0 bottom-0 z-20`}></div>
      <div
        className={`fixed max-w-[30rem] h-[60vh] top-[20%]  left-[35%]   bg-white p-[20px] z-50  `}
      >
        <div className="w-full flex items-end   justify-end ">
          {" "}
          <svg
            onClick={() => {
              setLoginClickState(false);
            }}
            className="cursor-pointer"
            width="40"
            height="40"
            viewbox="0 0 40 40"
          >
            <path
              d="M 10,10 L 30,30 M 30,10 L 10,30"
              stroke="black"
              stroke-width="4"
            />
          </svg>
        </div>
        <h1 className="text-center">Login To Get Started</h1>
        <div className="flex justify-center items-center flex-col gap-5 mt-7">
          {signInState == "Signup" ? (
            <input
              onChange={(e) => {
                const { value, name } = e.target;
                console.log(name);

                setLoginInfo((prevVal) => {
                  // console.log(prevVal);
                  return {
                    ...prevVal,
                    ["username"]: value,
                  };
                });
              }}
              name="username"
              className="bg-white border-[1px] border-black outline-none rounded-md h-9 p-6 "
              type="text"
              placeholder="Username"
            />
          ) : (
            ""
          )}
          <input
            onChange={(e) => {
              const { value, name } = e.target;
              console.log(name);

              setLoginInfo((prevVal) => {
                // console.log(prevVal);
                return {
                  ...prevVal,
                  [name]: value,
                };
              });
            }}
            name="email"
            className="bg-white border-[1px] border-black outline-none rounded-md h-9 p-6 "
            type="text"
            placeholder="Email"
          />

          <input
            onChange={(e) => {
              const { value, name } = e.target;
              console.log(name);

              setLoginInfo((prevVal) => {
                // console.log(prevVal);
                return {
                  ...prevVal,
                  [name]: value,
                };
              });
            }}
            name="password"
            className="bg-white border-[1px] border-black outline-none rounded-md h-9 p-6 "
            type="password"
            placeholder="Password"
          />

          <div className="flex gap-3">
            <button
              className="bg-black p-2 w-auto text-white rounded-md"
              onClick={getLoginInfo}
            >
              {signInState == "Login" ? "Login" : "Signup"}
            </button>
          </div>
          <h3 className="">
            {signInState == "Login" ? "New User?  " : "Already a user?  "}
            <span
              onClick={(e) => {
                console.log(e.target.textContent);
                if (e.target.textContent == "Login") {
                  setSignInState("Login");
                } else {
                  setSignInState("Signup");
                }
              }}
              className="text-blue-500 cursor-pointer"
            >
              {signInState == "Login" ? "Signup" : "Login"}
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
