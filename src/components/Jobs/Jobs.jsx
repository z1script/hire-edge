import React from "react";
import jobs from "../../../public/jobs.json";
import Job from "../Job/Job";

const Jobs = () => {
  return (
    <>
      <div className="text-center mt-24 space-y-5">
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 my-16">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
