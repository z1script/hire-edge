import React, {useEffect, useState} from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleClick = () => {
    setShowAll(true);
  };

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
