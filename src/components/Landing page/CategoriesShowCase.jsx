import React, { useContext } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import { useNavigate } from "react-router-dom";
import sportsIcon from "../../assets/sportIcon.png";
import space from "../../assets/sapce.svg";
import autobiographyIcon from "../../assets/autobiographyIcon.svg";
import programmingIcon from "../../assets/programmingIcon.svg";

const CategoriesShowCase = () => {
  const {
    currCategory,
    programmingBook,
    selfHelpBook,
    fictionalBook,
    currentBook,
    autobiographyBook,
    sportsBook,
  } = useContext(BooksRenderContext);

  const navigate = useNavigate();

  const categoriesArr = [
    {
      icon: <img src={programmingIcon} className="w-[6vw]" alt="" />,
      title: "Programming",
      description: "Get Access To programming Books",
      categoryID: "programmingBook.programmingBooks",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-14"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
      title: "Self Help",
      description: "Get Access To Self Help Books",
      categoryID: "selfHelpBook.selfHelpBooks",
    },
    // {
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke-width="1.5"
    //       stroke="currentColor"
    //       class="size-14"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    //       />
    //     </svg>
    //   ),
    //   title: "Autobiography",
    //   description: "Get Access To Self Help Books",
    // },
    {
      icon: <img src={space} className="w-[5vw]" alt="" />,
      title: "Fictional",
      categoryID: "fictionalBook.fictionalBooks",
    },
    {
      icon: <img src={sportsIcon} className="h-[10vh]" alt="" />,
      title: "Sports",
    },
    {
      icon: <img src={autobiographyIcon} className="h-[10vh]" alt="" />,
      title: "Autobiography",
    },
  ];
  return (
    <div className="h-[80vh] blockElem flex justify-center gap-14 items-center">
      {categoriesArr.map((elem) => {
        return (
          <div
            onClick={() => {
              if (elem.title == "Programming") {
                currentBook.setCurrentBooks(programmingBook.programmingBooks);
                currCategory.setCurrCategory(elem.title);
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 300);
                navigate("/books");
              } else if (elem.title == "Self Help") {
                currentBook.setCurrentBooks(selfHelpBook.selfHelpBooks);
                currCategory.setCurrCategory(elem.title);
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 300);
                navigate("/books");
              } else if (elem.title == "Fictional") {
                currentBook.setCurrentBooks(fictionalBook.fictionalBooks);
                currCategory.setCurrCategory(elem.title);
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 300);
                navigate("/books");
              } else if (elem.title == "Sports") {
                currentBook.setCurrentBooks(sportsBook.sportsBooks);
                currCategory.setCurrCategory(elem.title);
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 300);
                navigate("/books");
              } else if (elem.title == "Autobiography") {
                currentBook.setCurrentBooks(
                  autobiographyBook.autobiographyBooks
                );
                currCategory.setCurrCategory(elem.title);
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 300);
                navigate("/books");
              }
            }}
            className=" relative flex items-center "
          >
            <div className="group translate-x-0 translate-y-0  hover:translate-x-[-20px] hover:translate-y-[-20px] duration-300 absolute bg-[#000] text-white    border-black h-[25vh] items-center w-[15.3vw]  rounded-md  gap-2 cursor-pointer  shadow-lg justify-center flex flex-col">
              <div className="">{elem.icon}</div>
              <span className="font-bold h-[2em]">{elem.title}</span>
            </div>
            <div
              className=" h-[25vh] w-[15.3vw] rounded-md"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px,gray 1px,transparent 0)`,
                backgroundSize: "8px 8px",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesShowCase;
