import React from 'react';
import client from '../asset/header/client.png'
import candidate from '../asset/header/candidate.png'

const Header = () => {
  const handleButtonClick = (type) => {
    console.log(type);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-10 p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Logo</div>
      <div className="flex space-x-4">
 
  <button
    className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center space-x-2"
    onClick={() => handleButtonClick('candidate')}
  >
    <img
      src={candidate} 
      alt="Candidate Icon"
      className="w-5 h-5"
    />
    <span>Candidate</span>
  </button>


  <button
    className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center space-x-2"
    onClick={() => handleButtonClick('client')}
  >
    <img
      src={client}
      alt="Client Icon"
      className="w-5 h-5"
    />
    <span>Client</span>
  </button>
</div>

    </header>
  );
};

export default Header;
