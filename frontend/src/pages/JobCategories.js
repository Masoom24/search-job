import React, { useState } from "react";

const JobCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { 
      id: 1, 
      imgSrc: require('../asset/job categories/it.png'),
      name: "Information Technology (IT)", 
      jobs: [
        { title: "Software Engineer", salary: "₹50,000 - ₹70,000" },
        { title: "Data Analyst", salary: "₹45,000 - ₹65,000" }
      ] 
    },
    { 
      id: 2, 
      name: "Banking", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 3, 
      name: "Chemical", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 4, 
      name: "Engineering", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 5, 
      name: "Fertilizer", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 6, 
      name: "Fire & Safety", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 7, 
      name: "HR", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
      imgSrc: require('../asset/job categories/banking.jpg'),
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    }
    
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home-page px-6 py-10 bg-gray-100 min-h-screen">
  {/* Main Heading */}
  <div className="text-center mb-8">
  <div className="sbg-red-500 text-white p-3 rounded-lg mb-4 w-fit mx-auto">
  <h4 className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center space-x-2">Job Categories</h4>
</div>    
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Sector</h1>
    <p className="text-lg text-gray-600">Find your dream job now</p>
  </div>
  
  {/* Categories Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {categories.map((category) => (
      <div 
        key={category.id} 
        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
      >
        {/* Circular Image */}
        <div className="flex justify-center">
          <img 
            src={category.imgSrc} 
            alt={category.name} 
            className="w-20 h-20 object-cover rounded-full"
          />
        </div>
        {/* Category Name */}
        <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">{category.name}</h2>
        {/* View More Button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => handleCategoryClick(category)}
            className="bg-gray-400 text-white px-3 py-1 rounded text-xs font-medium hover:bg-gray-500 transition duration-300"
          >
            View More
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Jobs List Component */}
  {selectedCategory && (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Jobs in {selectedCategory.name}
      </h2>
      <ul className="bg-white p-6 shadow-md rounded-lg">
        {selectedCategory.jobs.map((job, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center py-3 border-b last:border-none"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-700">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.salary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

export default JobCategories;
