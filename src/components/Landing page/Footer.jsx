import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-white border-t-2 p-10">
      <div className="flex w-full items-center justify-center h-full">
        <h1 className="text-5xl ">Manage Your Library with Ease!</h1>
      </div>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="example@mail.com"
              className="input input-bordered join-item text-white"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
