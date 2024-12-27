import React from "react";

const Room = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 p-4">
      {/* Room Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      {/* Room Title */}
      <h3 className="text-2xl font-semibold mt-4">{title}</h3>
      {/* Room Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      {/* Book Now Button */}
      <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        Book Now
      </button>
    </div>
  );
};

export default Room;
