import React from "react";
import JobCategories from "../JobCategories/JobCategories";
import Jobs from "../Jobs/Jobs";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <JobCategories />
      <Jobs />
    </>
  );
};

export default Home;
