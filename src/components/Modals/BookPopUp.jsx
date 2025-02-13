import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import heart from "../../assets/borrow.png";
import BorrowBookPopUp from "../BooksPage/fictionalBooksComponents/BorrowBookPopUp";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ selectedBook }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Borrow</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <BorrowBookPopUp selectedBook={selectedBook} />
         </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ selectedBook }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="bg-blue-300  text-black flex items-center px-3   shadow-md gap-5 rounded-md h-[7vh] cursor-pointer hover:scale-[1.01] duration-100">
        <Button  onClick={handleOpen}>
          <span className="text-black text-lg flex justify-center items-center capitalize  gap-3">
            Borrow Book <img src={heart} className="h-[5vh]" alt="" />
          </span>
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <div className="h-full w-full flex   p-5 items-center">
            <div className="h-[70%] w-1/2">
              <img
                src={selectedBook.book_image}
                className="h-full w-1/2"
                alt=""
              />
            </div>
            <div className=" py-10  gap-20 flex flex-col items-center text-center w-1/2 h-full">
              <div className="text-2xl font-semibold">
                {selectedBook.book_name}
              </div>
              {/* <div className="flex-wrap">{selectedBook.book_description}</div> */}
              <ChildModal selectedBook={selectedBook} />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
