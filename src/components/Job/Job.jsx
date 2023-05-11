import React from "react";
import {Link} from "react-router-dom";

const Job = ({job}) => {
  const {id, img, title, company, salary, location, workplace, jobType} = job;
  const JobContext = React.createContext();
  return (
    <div className="border p-5 rounded-lg">
      <div className="ps-2 pb-2">
        <img className="my-5" src={img} alt="" />
        <h3 className="text-2xl">{title}</h3>
        <h4 className="text-xl opacity-90 mb-3">{company}</h4>
        <button className="btn-secondary">{workplace}</button>{" "}
        <button className="btn-secondary">{jobType}</button>
        <p className="lg:flex my-3">
          <img className="inline" src="Icons/Frame-4.png" alt="" />
          {location}{" "}
          <span className="">
            <img className="lg:ms-3 inline" src="Icons/Frame.png" alt="" />{" "}
            Salary: {salary}
          </span>
        </p>
        <JobContext.Provider value={job[id]} />
        <button className="btn-primary">
          <Link to={`/job/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Job;
