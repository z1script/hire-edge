import React from "react";

const Header = () => {
  return (
    <div>
      <header className="lg:flex items-center">
        <div className="space-y-6">
          <h1 className="text-6xl">
            One Step Closer To Your{" "}
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="text-xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <img src="/hero.png" alt="" />
      </header>
    </div>
  );
};

export default Header;
