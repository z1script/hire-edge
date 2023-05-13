import {Link} from "react-router-dom";
import React, {useState} from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap my-8 mb-12">
        <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
          <span className="text-3xl font-semibold">HireEdge</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
            <svg
              className={`fill-current hamburger ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current hamburger ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center justify-between lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}>
          <div className="text-xl lg:flex grid lg:gap-5 gap-2 py-2">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <button className="btn-primary">Start Applying</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
