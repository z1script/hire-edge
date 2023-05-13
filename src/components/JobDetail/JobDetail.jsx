import React, {useState} from "react";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const JobDetail = () => {
  const {jobId} = useParams();
  const jobDetailId = parseInt(jobId);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const job = jobs.find((element) => element.id === jobDetailId);

  const {
    title,
    company,
    salary,
    contactInfo,
    description,
    experience,
    requirements,
    jobResponsibility,
  } = job || {};

  return (
    <>
      <h1 className="text-center text-3xl mt-8 mb-16">Job Details</h1>
      <div className="flex text-xl justify-between">
        <div className="space-y-5 w-2/3">
          <p>
            <b>Job Description:</b> {description}
          </p>
          <p>
            <b>Job Responsibility:</b>
            {jobResponsibility?.map((jobRes, i) => (
              <li key={i}>{jobRes}</li>
            ))}
          </p>
          <p>
            <b>Experience:</b> {experience}
          </p>
        </div>
        <div>
          <div className="bg-blue-100 py-7 px-6 rounded-lg">
            <h2 className="font-bold border-b border-indigo-300 my-4 pb-2">
              Job Details
            </h2>
            <div className="space-y-2">
              <p>
                <img className="inline" src="/Icons/Frame.png" /> <b>Salary:</b>{" "}
                {salary}
              </p>
              <p>
                <img className="inline" src="/Icons/Frame-1.png" />{" "}
                <b>Job Title:</b> {title}
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="font-bold border-b border-indigo-300 my-4 pb-2">
                Contact Information
              </h2>
              <p>
                <img className="inline" src="/Icons/Frame-2.png" />{" "}
                <b>Phone:</b> {contactInfo?.phone}
              </p>
              <p>
                <img className="inline" src="/Icons/Frame-3.png" />{" "}
                <b>Email:</b> {contactInfo?.email}
              </p>
              <p>
                <img className="inline" src="/Icons/Frame-4.png" />{" "}
                <b>Address:</b> {contactInfo?.address}
              </p>
            </div>
          </div>
          <button className="btn-primary mt-5 w-full h-14">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
