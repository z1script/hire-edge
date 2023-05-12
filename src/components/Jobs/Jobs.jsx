import React, {useState} from "react";
import Job from "../Job/Job";
import {useLoaderData} from "react-router-dom";

const Jobs = () => {
  const jobs = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="text-center mt-24 space-y-5">
        <h2 className="lg:text-5xl text-4xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid  lg:grid-cols-2 gap-5 my-16">
        {jobs.slice(0, showAll ? jobs.length : 4).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center mb-16">
        {!showAll && (
          <button onClick={handleClick} className="btn-primary">
            See All Jobs
          </button>
        )}
      </div>
    </>
  );
};

export default Jobs;
