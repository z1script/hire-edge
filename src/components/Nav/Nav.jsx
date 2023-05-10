import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between my-5">
        <span className="text-3xl font-semibold">HireEdge</span>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <button className="btn-primary">Start Applying</button>
      </nav>
    </>
  );
};

export default Nav;
