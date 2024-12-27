import React, { useState, useEffect } from "react";
import image1 from "../img/609867568.jpg"; // Replace with your images
import image2 from "../img/609867474.jpg";
import image3 from "../img/570366246.jpg";
import image4 from "../img/609867519.jpg";

const LandingPage = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: 1,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">
            Welcome to AEON Tower Suites & Hotel by CMC
          </h1>
          <p className="text-lg mt-4">Luxury living in the heart of the city</p>
          <a
            href="#rooms"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg text-xl z-10 hover:bg-blue-700 transition-all duration-300"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
