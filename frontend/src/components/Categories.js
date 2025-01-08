import React from "react";
import bg from '../asset/job categories/bg.jpeg';

const Categories = ({ categories, onCategoryClick }) => {
  return (
    <div className="mt-10 text-left">
      <h2 className="text-2xl font-semibold mb-6">Job Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 mx-12">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategoryClick(category)}
            className="relative group cursor-pointer rounded-md overflow-hidden shadow-lg transition-all duration-300 border-2 border-gray-350"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "280px",
            }}
          >
            <div
              className="absolute inset-0 group-hover:bg-red-500 transition-all duration-300"
              style={{ zIndex: 0 }}
            ></div>
            <div
              className="relative z-10 flex items-center justify-center h-full text-white text-lg font-semibold group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-300"
            >
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
