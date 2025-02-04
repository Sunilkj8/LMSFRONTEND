import React from "react";

const Accordion = ({ getCurrentBooks }) => {
  return (
    <div>
      <div className="dropdown bg-white dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1 text-white">
          Categories
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu   rounded-box   w-52 p-2 shadow bg-white z-40"
        >
          <li>
            <span
              onClick={(e) => {
                // console.log(e.target.textContent);
                getCurrentBooks(e.target.textContent);
              }}
              className="hover:text-red-500 cursor-pointer duration-200  "
            >
              Fictional
            </span>
          </li>
          <li>
            <span
              onClick={(e) => {
                // console.log(e.target.textContent);
                getCurrentBooks(e.target.textContent);
              }}
              className="hover:text-red-500 cursor-pointer duration-200  "
            >
              Self Help
            </span>{" "}
          </li>
           
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
