import React from "react";
import {useLoaderData} from "react-router-dom";
import JobCategories from "../JobCategories/JobCategories";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <>
      <header className="flex items-center">
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
        <img src="/src/assets/hero.png" alt="" />
      </header>
      <JobCategories categories={categories}></JobCategories>
      <Jobs />
    </>
  );
};

export default Home;
