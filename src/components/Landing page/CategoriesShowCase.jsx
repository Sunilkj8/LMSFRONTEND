import React from "react";

const CategoriesShowCase = () => {
  const categoriesArr = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
      title: "Programming",
      description: "Get Access To programming Books",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
      
      
      ),
      title: "Self Help",
      description: "Get Access To Self Help Books",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
      
      
      
      ),
      title: "Autobiography",
      description: "Get Access To Self Help Books",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
      
      
      
      
      ),
      title: "Fictional",
     },
  ];
  return (
    <div className="h-[80vh] blockElem flex justify-center gap-14 items-center">
      {categoriesArr.map((elem) => {
        return (
          <div className=" relative flex items-center ">
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
