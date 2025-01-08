import React, { useState, useEffect } from "react";
import search from "../asset/homepage/search.png";
import mainBG from '../asset/homepage/mainBG.jpg';

const Home = () => {
  const [searchData, setSearchData] = useState({
    skills: "",
    experience: "Fresher",
    location: "",
  });
  const [jobResults, setJobResults] = useState([]);
  
  useEffect(() => {
    console.log("Component mounted. Ready for API integration.");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    try {
      console.log("Search triggered with data:", searchData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="text-center py-10 bg-gray-800 text-white">
        <h1 className="text-4xl font-semibold">Search Your Jobs</h1>
        <br />
        <div className="flex justify-center mt-8">
          <div className="bg-white rounded-full shadow-md p-4 w-full max-w-5xl">
            <div className="flex flex-wrap justify-center sm:space-x-4 space-y-4 sm:space-y-0 sm:space-x-4 items-center">
              <input
                type="text"
                name="skills"
                className="form-input px-4 py-2 rounded-md sm:rounded-full border border-gray-300 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Skills / Designation"
                value={searchData.skills}
                onChange={handleInputChange}
              />
              <select
                name="experience"
                className="form-select px-4 py-2 rounded-md sm:rounded-full border border-gray-300 w-full sm:w-48 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchData.experience}
                onChange={handleInputChange}
              >
                <option value="Fresher">Fresher</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="10+ Years">More than 10 Years</option>
              </select>
              <input
                type="text"
                name="location"
                className="form-input px-4 py-2 rounded-md sm:rounded-full border border-gray-300 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Location"
                value={searchData.location}
                onChange={handleInputChange}
              />
              <button
                className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md sm:rounded-full flex items-center space-x-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={handleSearch}
              >
                <img
                  src={search}
                  alt="Search Icon"
                  className="w-5 h-5"
                />
                <span>Search Jobs</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {jobResults.length > 0 ? (
            <ul className="space-y-2">
              {jobResults.map((job, index) => (
                <li
                  key={index}
                  className="bg-white shadow p-4 rounded-md border border-gray-200"
                >
                  {job.title} - {job.location}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
