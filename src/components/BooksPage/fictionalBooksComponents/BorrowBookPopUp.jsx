import React, { useRef, useState, useEffect } from "react";

const BorrowBookPopUp = ({ setBorrowBookPopUp,selectedBook }) => {
  const [issuedOn, setIssuedOn] = useState({ date: "", month: "", year: "" });
  const [returnOn, setReturnOn] = useState({ date: "", month: "", year: "" });
  const [remainingDays, setRemainingDays] = useState("");
  const [issueVal, setIssueVal] = useState("");
  const [returnVal, setReturnVal] = useState("");
  function daysInMonth(month) {
    console.log("month is : ", month);

    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      // console.log("31 Days month");
      return 31;
    } else if (month == 2) {
      // console.log("February");
      return 28;
    } else {
      // console.log("30 Days Month");
      return 30;
    }
  }

  function calcRemainingDays() {
    const issueDate = issuedOn.date;
    // console.log(issuedOn.date);

    const daysRemainingInFirstMonth = daysInMonth(issuedOn.month) - issueDate;
    // console.log("remaining Days are: ", daysRemainingInFirstMonth);
    const daysInSecondMonth = returnOn.date;
    if (returnOn.month == issuedOn.month) {
      // console.log("Return Book on: ", daysInSecondMonth - issuedOn.date);
      setRemainingDays(
        `Return After :${daysInSecondMonth - issuedOn.date} Days`
      );
    } else {
      // console.log(
      //   "REturn book on: ",
      //   daysRemainingInFirstMonth + daysInSecondMonth
      // );
      if (daysRemainingInFirstMonth + daysInSecondMonth >= 30) {
        setIssueVal("");
        setReturnVal("");
        setRemainingDays("Max Day Limit Exceeded!");
      } else {
        setRemainingDays(
          `Return After :${daysRemainingInFirstMonth + daysInSecondMonth} Days`
        );
      }
    }
  }

  useEffect(() => {
    calcRemainingDays();
  }, [returnOn]);

  function calcIssuedDate() {
    let d = new Date(issuedOnRef.current.value);
    setIssueVal(issuedOnRef.current.value);
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();
    // console.log(month + 1);
    setIssuedOn((prevVal) => {
      return {
        ...prevVal,
        ["date"]: date,
        ["month"]: month + 1,
        ["year"]: year,
      };
    });
  }

  function calcReturnDate() {
    let d = new Date(returnOnRef.current.value);
    setReturnVal(returnOnRef.current.value);
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();
    // console.log(month + 1);
    setReturnOn((prevVal) => {
      return {
        ...prevVal,
        ["date"]: date,
        ["month"]: month + 1,
        ["year"]: year,
      };
    });
  }

  const issuedOnRef = useRef();
  const returnOnRef = useRef();
  console.log(issuedOn);
  console.log(returnOn);

  // calcMonthDays();

  return (
    <div className="fixed top-[11vh] h-[70%] w-[28vw] bg-[white] rounded-md    justify center items-center flex-col py-20 duration-300 transition-all ease-in-out z-50 border-2 px-20">
      <div
        className="absolute left-[24vw] top-[3vh] font-extralight  cursor-pointer"
        onClick={() => {
          setBorrowBookPopUp(false);
          //   document.body.style.overflowY = "scroll";
        }}
      >
        <svg width="32" height="32" viewbox="0 0 32 32">
          <path
            d="M 10,10 L 30,30 M 30,10 L 10,30"
            stroke="black"
            stroke-width="3"
          />
        </svg>
      </div>
      <div className="flex items-center justify-start gap-3 flex-col">
        <div>{selectedBook.book_name}</div>
        <div className="flex items-center gap-2">
          {" "}
          <h2 className="uppercase ">Issuing On</h2>
          <input
            onChange={() => {
              // console.log(issuedOnRef.current.value);
              calcIssuedDate();
              // calcRemainingDays();

              // daysInMonth(issuedOn.month);
            }}
            ref={issuedOnRef}
            className="text-white p-3 rounded-lg outline-none"
            type="date"
            value={issueVal}
          />
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <h2 className="uppercase  ">Return On</h2>
          <input
            onChange={() => {
              // console.log(issuedOnRef.current.value);
              calcReturnDate();
            }}
            ref={returnOnRef}
            className="text-white p-3 rounded-lg outline-none"
            type="date"
            value={returnVal}
          />
        </div>
        {remainingDays}
        <div className="text-center text-red-400 capitalize">
          The Book Can Be issued for maximum 30 days.
        </div>
        <div className="bg-black text-white p-2 cursor-pointer rounded-md">Issue</div>
      </div>
    </div>
  );
};

export default BorrowBookPopUp;
