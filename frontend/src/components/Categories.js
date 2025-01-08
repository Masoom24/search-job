import React from "react";
import bg from '../asset/job categories/bg.jpeg';

const Categories = ({ categories, onCategoryClick }) => {
  return (
    <div className="mt-10 text-left">
      <h2 className="text-2xl font-semibold mb-6">Job Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-12">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-105 hover:bg-red-500 hover:text-white transition duration-300"
          >
            {/* Circular Image */}
            <div className="flex justify-center">
              <img 
                src={category.imgSrc} 
                alt={category.name} 
                className="w-20 h-20 object-cover rounded-full border-2 border-white"
              />
            </div>
            {/* Category Name */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
              {category.name}
            </h2>
            {/* View More Button */}
            <div className="flex justify-center mt-3">
              <button
                onClick={() => onCategoryClick(category)}
                className="bg-gray-400 text-white px-3 py-1 rounded text-xs font-medium hover:bg-gray-600 transition duration-300"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
