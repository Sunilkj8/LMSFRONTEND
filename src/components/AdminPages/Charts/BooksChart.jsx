import React, { useContext } from "react";
// import * as React from 'react';
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BooksRenderContext } from "../../../contexts/BooksRenderContext";

const BooksChart = () => {
  const { fictionalBook, selfHelpBook,programmingBook } = useContext(BooksRenderContext);
  return (
    <div className="">
      <PieChart
        className="text-yellow-300"
        series={[
          {
            data: [
              {
                id: 0,
                value: selfHelpBook.selfHelpBooks.length,
                label: "Self Help",
              },
              {
                id: 1,
                value: fictionalBook.fictionalBooks.length,
                label: "Fictional",
              },
              {
                id: 2,
                value: programmingBook.programmingBooks.length,
                label: "Programming",
              },
            ],
          },
        ]}
        width={700}
        height={400}
      />
    </div>
  );
};

export default BooksChart;
