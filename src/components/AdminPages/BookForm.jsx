import axios from "axios";
import React, { useState } from "react";

const BookForm = () => {
  const [bookData, setBookData] = useState({
    book_name: "",
    book_author: "",
    book_image: "",
    book_description: "",
    category: "",
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to an API
    console.log("Book Data Submitted:", bookData);
    // You can add logic here to reset the form or display a success message
    alert("Book data submitted. Check console for submitted values");

    await axios.post("http://localhost:3001/addbooks", bookData);
  };

  return (
    <form
      className="flex flex-col gap-10 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-5">
        <label htmlFor="book_name">Book Name</label>
        <input
          className="bg-white border border-black p-3 rounded-sm w-[15vw]"
          type="text"
          id="book_name"
          name="book_name"
          value={bookData.book_name}
          onChange={handleChange}
          required // Example: making this field required
        />
      </div>

      <div className="flex gap-5">
        <label htmlFor="book_author">Book Author</label>
        <input
          className="bg-white border border-black p-3 rounded-sm w-[15vw]"
          type="text"
          id="book_author"
          name="book_author"
          value={bookData.book_author}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex gap-5">
        <label htmlFor="book_image">Book Image URL</label>
        <input
          className="bg-white border border-black p-3 rounded-sm w-[15vw]"
          type="url" // Use type="url" for image URLs
          id="book_image"
          name="book_image"
          value={bookData.book_image}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex gap-5">
        <label htmlFor="book_description">Book Description</label>
        <textarea
          className="bg-white border border-black p-3 rounded-sm w-[15vw]"
          id="book_description"
          name="book_description"
          value={bookData.book_description}
          onChange={handleChange}
          rows="4" // Adjust number of rows as needed
          cols="50" // Adjust number of columns as needed
          required
        />
      </div>

      <div className="flex gap-5">
        <label htmlFor="category">Category</label>
        <select
          className="bg-white border border-black p-3 rounded-sm w-[15vw]"
          id="category"
          name="category"
          value={bookData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>{" "}
          {/* Important: Add a default option */}
          <option value="fictional">Fictional</option>
          <option value="self help">Self Help</option>
          <option value="autobiography">Autobiography</option>
          <option value="programming">Programming</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="flex gap-10">
        <button type="submit" className="p-3 rounded-lg bg-black text-white">
          Submit
        </button>
        <button
          onClick={() => {
            setBookData({
              book_name: "",
              book_author: "",
              book_image: "",
              book_description: "",
              category: "",
            });
          }}
          className="p-3 rounded-lg bg-black text-white"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default BookForm;
