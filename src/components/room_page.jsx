import React from "react";
import room1 from "../img/570179000.jpg";
import room2 from "../img/609867519.jpg";
import room3 from "../img/609867568.jpg";

const RoomsPage = () => {
  return (
    <div id="rooms" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Room 1 */}
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={room1}
              alt="Deluxe Double Studio"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-semibold mb-2">
                  Deluxe Double Studio
                </h3>
                <p className="text-sm mb-4">
                  Enjoy a comfortable stay with luxury amenities and a beautiful
                  city view.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Room 2 */}
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={room2}
              alt="Deluxe Suite"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-semibold mb-2">Deluxe Suite</h3>
                <p className="text-sm mb-4">
                  Spacious and elegant, perfect for those seeking an upscale
                  experience.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Room 3 */}
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={room3}
              alt="Superior Suite"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-semibold mb-2">Superior Suite</h3>
                <p className="text-sm mb-4">
                  Experience premium comfort and top-tier amenities for a
                  memorable stay.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
