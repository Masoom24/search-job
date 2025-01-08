import React, { useState } from "react";
import Categories from "../components/Categories"; // Import Categories component
import JobsList from "../components/JobsList"; // Import JobsList component

const JobCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { 
      id: 1, 
      name: "Information Technology (IT)", 
      //imgSrc: require('../assets/job-categories/it_image.jpg'), // Image path
      jobs: [{ title: "Software Engineer", salary: "₹50,000 - ₹70,000" }] 
    },
    { 
      id: 2, 
      name: "Banking", 
      // imgSrc: require('../assets/job-categories/banking_image.jpg'), // Image path
      jobs: [{ title: "Bank Manager", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 3, 
      name: "Chemical", 
      // imgSrc: require('../assets/job-categories/chemical_image.jpg'), // Image path
      jobs: [{ title: "Lab Technician", salary: "₹30,000 - ₹50,000" }] 
    },
    { 
      id: 4, 
      name: "Engineering", 
      // imgSrc: require('../assets/job-categories/engineering_image.jpg'), // Image path
      jobs: [{ title: "Engineering", salary: "₹50,000 - ₹60,000" }] 
    },
    { 
      id: 5, 
      name: "Fertilizer", 
      // imgSrc: require('../assets/job-categories/fertilizer_image.jpg'), // Image path
      jobs: [{ title: "Fertilizer", salary: "₹50,000 - ₹70,000" }] 
    },
    { 
      id: 6, 
      name: "Fire & Safety", 
      // imgSrc: require('../assets/job-categories/fire_safety_image.jpg'), // Image path
      jobs: [{ title: "Fire & Safety", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 7, 
      name: "HR", 
      // imgSrc: require('../assets/job-categories/hr_image.jpg'), // Image path
      jobs: [{ title: "HR", salary: "₹30,000 - ₹50,000" }] 
    },
    { 
      id: 8, 
      name: "HR/Staffing", 
       //imgSrc: require('../assets/job-categories/hr_staffing_image.jpg'), // Image path
      jobs: [{ title: "HR/Staffing", salary: "₹50,000 - ₹60,000" }] 
    },
    { 
      id: 9, 
      name: "Infrastructure", 
      // imgSrc: require('../assets/job-categories/infrastructure_image.jpg'), // Image path
      jobs: [{ title: "Infrastructure", salary: "₹50,000 - ₹70,000" }] 
    },
    { 
      id: 10, 
      name: "Logistic", 
      // imgSrc: require('../assets/job-categories/logistic_image.jpg'), // Image path
      jobs: [{ title: "Logistic", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 11, 
      name: "Manufacturing", 
       //imgSrc: require('../assets/job-categories/manufacturing_image.jpg'), // Image path
      jobs: [{ title: "Manufacturing", salary: "₹30,000 - ₹50,000" }] 
    },
    { 
      id: 12, 
      name: "Mining", 
      // imgSrc: require('../assets/job-categories/mining_image.jpg'), // Image path
      jobs: [{ title: "Mining", salary: "₹50,000 - ₹60,000" }] 
    },
    { 
      id: 13, 
      name: "Offshore or Onshore", 
       //imgSrc: require('../assets/job-categories/offshore_image.jpg'), // Image path
      jobs: [{ title: "Offshore or Onshore", salary: "₹50,000 - ₹70,000" }] 
    },
    { 
      id: 14, 
      name: "Oil and Gas", 
       //imgSrc: require('../assets/job-categories/oil_gas_image.jpg'), // Image path
      jobs: [{ title: "Oil and Gas", salary: "₹40,000 - ₹60,000" }] 
    },
    { 
      id: 15, 
      name: "Pharma", 
       //imgSrc: require('../assets/job-categories/pharma_image.jpg'), // Image path
      jobs: [{ title: "Pharma", salary: "₹30,000 - ₹50,000" }] 
    },
    { 
      id: 16, 
      name: "Power", 
      // imgSrc: require('../assets/job-categories/power_image.jpg'), // Image path
      jobs: [{ title: "Power", salary: "₹50,000 - ₹60,000" }] 
    },
    { 
      id: 17, 
      name: "Retailer", 
      // imgSrc: require('../assets/job-categories/retailer_image.jpg'), // Image path
      jobs: [{ title: "Retailer", salary: "₹50,000 - ₹70,000" }] 
    },
    { 
      id: 18, 
      name: "Telecom", 
     //  imgSrc: require('../assets/job-categories/telecom_image.jpg'), // Image path
      jobs: [{ title: "Telecom", salary: "₹40,000 - ₹60,000" }] 
    }
  ];

  // Handle category click and set the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home-page">
      <h1 className="text-4xl font-bold text-gray-800">Choose Your Sector</h1>
      <p className="text-lg text-gray-600">Find your dream job now</p>
      
      {/* Categories Component */}
      <Categories categories={categories} onCategoryClick={handleCategoryClick} />
      
      {/* Jobs List Component */}
      {selectedCategory && <JobsList jobs={selectedCategory.jobs} categoryName={selectedCategory.name} />}
    </div>
  );
};

export default JobCategories;
