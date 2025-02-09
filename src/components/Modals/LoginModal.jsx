import React, { useContext, useEffect, useState } from "react";
import { IsLoginClicked } from "../../contexts/LoginContext";
import axios from "axios";
import { Link } from "react-scroll";
import loginImage from '../../assets/loginImage.jpg'
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
      localStorage.setItem("user_id", res.data.user_id);
      const userNameResponse = await axios.get("http://localhost:3002/me", {
        headers: { token: res.data.token },
      });
      console.log(userNameResponse.data.username);
      localStorage.setItem("username", userNameResponse.data.username);
      localStorage.setItem("usertype", res.data.usertype);
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
      <div className={`fixed   blurBG left-0 right-0 top-0 bottom-10 z-20`}></div>
      <div
        className={`fixed max-w-[100vw] h-[100vh] top-[0%]  left-[0] w-[100vw]   bg-[#EFFAFC] p-[20px] z-50    `}
      >
        <div className="absolute    left-0 top-0 w-[70%] h-full ">
          <img src={loginImage} className="h-full" alt="" />
        </div>
        <div className=" ">
          <div className="w-1/2 relative left-[48.5vw] flex items-end      justify-end ">
            {" "}
            <svg
              onClick={() => {
                setLoginClickState(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 cursor-pointer  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-center text-4xl font-semibold   flex justify-end px-[11vw] relative top-[15vh]">
            bookVault
          </h1>

          <h1 className="text-center text-xl   flex justify-end px-[10vw] py-5 relative top-[20vh]">
            Login To Get Started
          </h1>
          <div className="flex   w-1/2 relative left-[50vw] justify-center   h-full items-end p-32 flex-col gap-5 mt-7">
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
                className="bg-white border-[1px] border-black outline-none rounded-md h-9 p-6 w-[20vw] "
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
              className="bg-white border-[1px] border-black outline-none rounded-md h-9 p-6 w-[20vw] "
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
              className="bg-white border-[1px] border-black outline-none rounded-md h-9 p-6 w-[20vw] "
              type="password"
              placeholder="Password"
            />

            <div className="flex w-[63%] justify-center gap-3">
              <button
                className="bg-black  p-2 w-auto text-white rounded-md"
                onClick={getLoginInfo}
              >
                {signInState == "Login" ? "Login" : "Signup"}
              </button>
            </div>
            <h3 className="flex  gap-1  w-[63%] justify-center">
              {signInState == "Login" ? "New User?  " : "Already a user?    "}
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
      </div>
    </>
  );
};

export default LoginModal;
