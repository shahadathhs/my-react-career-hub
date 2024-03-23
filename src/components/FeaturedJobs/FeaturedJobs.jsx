import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [])

  return (
    <div  className="text-center p-5 space-y-4">
      <h3 className="text-5xl">Featured Jobs: {jobs.length}</h3>
      <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="text-left grid grid-cols-2 gap-5">
        {
          jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;