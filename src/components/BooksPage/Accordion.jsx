import React, { useContext, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";

const Accordion = ({ getCurrentBooks }) => {
  const { currCategory, setCurrCategory } =
    useContext(BooksRenderContext).currCategory;

  const categoryArr = [
    { category: "All" },
    { category: "Fictional" },
    { category: "Self Help" },
    { category: "Programming" },
    { category: "Autobiography" },
    { category: "Sports" },

  ];

  const handleChange = (event) => {
    setCurrCategory(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={currCategory}
          onChange={handleChange}
          autoWidth
          label="categories"
          className="w-[10vw]"
        >
          {categoryArr.map((elem) => {
            return (
              <MenuItem
                onClick={(e) => {
                  // console.log(e.target.textContent);
                  setCurrCategory(e.target.textContent);
                  getCurrentBooks(e.target.textContent);
                }}
                value={elem.category}
              >
                {elem.category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Accordion;
