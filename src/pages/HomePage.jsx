import React from 'react';
import LibraryImg from "../assets/images/booklibrary.jpg";

const HomePage = () => {
  return (
    <div className="mx-auto px-4 py-8">
        <h3 className="text-lg font-bold text-white text-center mt-4">Book Library</h3>
        <img src={LibraryImg} alt="" className="md:h-[500px] mt-8 cursor-zoom-in" />
      </div>
  )
}

export default HomePage