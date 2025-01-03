import React, { useState } from "react";

// Importing images dynamically
import img1 from "../img/570179000.jpg";
import img2 from "../img/570179064.jpg";
import img3 from "../img/570366246.jpg";
import img4 from "../img/570612246.jpg";
import img5 from "../img/570730258.jpg";
import img6 from "../img/571021102.jpg";
import img7 from "../img/573259076.jpg";
import img8 from "../img/609867474.jpg";
import img9 from "../img/609867485.jpg";
import img10 from "../img/609867519.jpg";
import img11 from "../img/609867538.jpg";
import img12 from "../img/609867589.jpg";
import img13 from "../img/609867568.jpg";
import img14 from "../img/610362482.jpg";
import img15 from "../img/610402639.jpg";
import img16 from "../img/610402773.jpg";
import img17 from "../img/612656821.jpg";

// Array of image imports
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
];

const GalleryPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null); // Track clicked image for modal

  // Show only the first 8 images (2 rows x 4 columns)
  const imagesToShow = showAll ? images : images.slice(0, 8);

  return (
    <div id="gallery" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Gallery</h2>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4">
          {imagesToShow.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setEnlargedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* "View All" or "Show Less" Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Modal for Enlarged Image */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setEnlargedImage(null)}
            >
              ✕
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="max-w-full max-h-screen rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
