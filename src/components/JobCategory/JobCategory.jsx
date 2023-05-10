import React from "react";

const JobCategory = ({category}) => {
  const {name, available_jobs, logo} = category;
  return (
    <div className="flex bg-purple-100 bg-opacity-40 rounded-lg p-9">
      <div className="space-y-2">
        <img className="bg-purple-100 rounded-lg mb-6 p-3" src={logo} alt="" />
        <h3 className="text-2xl">{name}</h3>
        <p className="">{available_jobs} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategory;
