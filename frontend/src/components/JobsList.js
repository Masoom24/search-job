import React from "react";

const JobsList = ({ jobs, categoryName }) => {
  return (
    <div className="mt-10 text-left">
      <h2 className="text-2xl font-semibold mb-6">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600 mt-2">{job.salary}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
