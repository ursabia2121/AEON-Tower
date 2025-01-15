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
          AEON Tower Suites is more than just a luxury hotel in Davao City—it’s a gateway to the vibrant culture, rich heritage, 
          and modern lifestyle that this bustling destination has to offer. Located in the iconic AEON Tower, we take pride in being 
          a part of CMC, a trusted name in delivering world-class accommodations and services. Whether you're looking for a hotel in 
          Davao City for business or leisure, AEON Tower Suites ensures a stay that exceeds expectations.From our prime location in Davao City, 
          guests at AEON Tower Suites enjoy unparalleled convenience. The hotel is situated near the city’s bustling business districts, renowned
          tourist attractions, and vibrant culinary hubs. Whether it’s your first time in the city or you’re a frequent visitor, AEON Tower Suites in 
          Davao City offers more than just accommodation—it provides an unforgettable experience of comfort and elegance.
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
