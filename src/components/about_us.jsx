import React from "react";
import aboutImage from "../img/AEON-Tower-by-CMC-LLC-1.jpg"; // Using an image from the site

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={aboutImage}
              alt="AEON Tower Suites & Hotel by CMC"
              className="w-full h-full object-cover"
              title="AEON Tower Suites & Hotel by CMC"
            />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About AEON Tower Suites & Hotel by CMC
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nestled in the heart of the city, <b>AEON Tower Suites & Hotel by CMC in Davao City </b>
            offers an unparalleled blend of luxury, comfort, and convenience.
            Our mission is to provide exceptional service and a memorable
            experience, whether you're here for leisure or business.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From elegantly designed rooms to world-class amenities, every detail
            is crafted with your comfort in mind. Discover the perfect retreat
            at AEON Tower Suites, where modern luxury meets timeless charm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
