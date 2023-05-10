import React from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategories = ({categories}) => {
  return (
    <>
      <div className="text-center mt-24 space-y-5">
        <h2 className="text-5xl">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between gap-5 my-10">
        {categories.map((category) => (
          <JobCategory key={category.id} category={category}></JobCategory>
        ))}
      </div>
    </>
  );
};

export default JobCategories;
