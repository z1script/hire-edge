import {useEffect, useState} from "react";
import {getAppliedJobs} from "../../utilities/fakedb";
import {Link, useLoaderData} from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const storedJobs = getAppliedJobs();
  const id = Object.keys(storedJobs);

  const appliedJobs = jobs.filter((job) => id.includes(job.id.toString()));

  return (
    <>
      <h1 className="text-center text-4xl my-14 font-bold">
        {appliedJobs[0] ? "Applied Jobs" : "No Jobs Applied"}
      </h1>
      {appliedJobs
        ? appliedJobs.map(
            ({
              id,
              img,
              title,
              company,
              salary,
              location,
              workplace,
              jobType,
            }) => (
              <div
                key={id}
                className="border rounded-lg flex my-5 justify-between items-center p-5">
                <div className="flex items-center gap-5">
                  <img
                    className="bg-[#F4F4F4] object-contain w-60 h-52 p-10"
                    src={img}
                  />
                  <div className="space-y-2">
                    <h2 className="text-2xl">{title}</h2>
                    <h3 className="text-xl">{company}</h3>
                    <p>
                      <button className="btn-secondary">{workplace}</button>{" "}
                      <button className="btn-secondary">{jobType}</button>
                    </p>
                    <p className="lg:flex my-3">
                      <img className="inline" src="Icons/Frame-4.png" alt="" />
                      {location}{" "}
                      <span className="">
                        <img
                          className="lg:ms-3 inline"
                          src="Icons/Frame.png"
                          alt=""
                        />{" "}
                        Salary: {salary}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <button className="btn-primary">
                    <Link to={`/job/${id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            )
          )
        : ""}
    </>
  );
};

export default AppliedJobs;
