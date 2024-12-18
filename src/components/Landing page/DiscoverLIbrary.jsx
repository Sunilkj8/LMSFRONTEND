import React, { useEffect, useState } from "react";
import axios from "axios";
const DiscoverLIbrary = () => {
  const [BOOKS, setBOOKS] = useState([]);

  async function getKidsBookData() {
    try {
      const response = await axios.get("http://localhost:3001");
      // console.log(response.data);
      setBOOKS(response.data);
    } catch (error) {
      console.error("Error fetching Book Data");
    }
   
  }

  useEffect(() => {
    getKidsBookData();
  }, []);

  //   console.log(BOOKS[0].book_image);

  return (
    <>
      <div className="">
        {" "}
        {/* <div className="w-full flex h-auto  justify-center">
          <h1 className="text-6xl uppercase mt-28">Discover Library</h1>
        </div> */}
        <div className="carousel w-full h-[70vh]  ">
          <div id="slide1" className="carousel-item relative w-full ">
            <div className="flex h-full w-full items-center justify-between mx-72">
              <div className="relative card-component   overflow-hidden z-10">
                {" "}
                <img
                  src={BOOKS.length > 0 ? BOOKS[4].book_image : null}
                  className="h-[40vh]"
                />
               
              </div>
              <div className="relative card-component border-2 overflow-hidden z-10">
                {" "}
                <img
                  src={BOOKS.length > 0 ? BOOKS[3].book_image : null}
                  className="h-[40vh]"
                />
            
              </div>
              <div className="relative card-component border-2 overflow-hidden z-10">
                {" "}
                <img
                  src={BOOKS.length > 0 ? BOOKS[5].book_image : null}
                  className="h-[40vh]"
                />
              
              </div>
              
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full transition-all duration-300  ease-in-out "
          >
            <div className="flex h-full w-full items-center justify-between mx-72">
              <div className="relative card-component border-2 overflow-hidden z-10">
                {" "}
                <img
                  src={BOOKS.length > 0 ? BOOKS[2].book_image : null}
                  className="h-[40vh]"
                />
              
              </div>
              <div className="relative card-component border-2 overflow-hidden z-10">
                {" "}
                <img
                  src={BOOKS.length > 0 ? BOOKS[7].book_image : null}
                  className="h-[40vh]"
                />
             
              </div>
              <div className="relative card-component border-2 overflow-hidden z-10">
                {" "}
                <img
                  src={BOOKS.length > 0 ? BOOKS[6].book_image : null}
                  className="h-[40vh]"
                />
              
              </div>
              
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverLIbrary;
