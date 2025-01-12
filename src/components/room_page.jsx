import React, { useState } from "react";
import room1 from "../img/AEON-Tower-by-CMC-LLC-1.jpg";
import room2 from "../img/AEON-Tower-by-CMC-LLC-10.jpg";
import room3 from "../img/AEON-Tower-by-CMC-LLC-13.jpg";
import BookingForm from "./booking_form";

const RoomsPage = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentRoomDetails, setCurrentRoomDetails] = useState(null);

  const roomDetails = [
    {
      id: 1,
      name: "Deluxe Double Studio Bedroom",
      description:
        "Enjoy a comfortable stay with luxury amenities and a beautiful city view.",
      price: "$120 / night",
      img: room1,
      size: "40 m²",
      bedroom: "1 queen bed",
      livingRoom: "N/A",
      amenities: [
        "Private bathroom",
        "City view",
        "Air conditioning",
        "Flat-screen TV",
        "Free WiFi",
      ],
    },
    {
      id: 2,
      name: "Deluxe Suite",
      description:
        "Spacious and elegant, perfect for those seeking an upscale experience.",
      price: "$180 / night",
      img: room2,
      size: "55 m²",
      bedroom: "1 king bed",
      livingRoom: "1 sofa bed",
      amenities: [
        "Private bathroom",
        "Mountain view",
        "Air conditioning",
        "Coffee machine",
        "Free WiFi",
        "Flat-screen TV",
      ],
    },
    {
      id: 3,
      name: "Superior Suite",
      description:
        "Experience premium comfort and top-tier amenities for a memorable stay.",
      price: "$250 / night",
      img: room3,
      size: "70 m²",
      bedroom: "2 twin beds",
      livingRoom: "1 sofa bed",
      amenities: [
        "Private bathroom",
        "Pool view",
        "Landmark view",
        "Air conditioning",
        "Kitchenette",
        "Free WiFi",
        "Smart TV",
      ],
    },
  ];

  const handleSeeDetails = (room) => {
    setCurrentRoomDetails(room);
    setShowDetailsModal(true);
  };

  return (
    <div id="rooms" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {roomDetails.map((room) => (
            <div
              key={room.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={room.img}
                download="Deluxe-Double-Studio-Room.jpg"
                alt={`${room.name} Deluxe Double Studio Bedroom`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-sm mb-4">{room.description}</p>
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => setShowBookingModal(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => handleSeeDetails(room)}
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-4 rounded shadow-lg w-full max-w-md overflow-y-auto"
            style={{ maxHeight: "75vh", maxWidth: "800px" }}
          >
            <button
              className="text-gray-100 hover:text-gray-800 absolute top-4 right-4"
              onClick={() => setShowBookingModal(false)}
            >
              ✕
            </button>
            <BookingForm />
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && currentRoomDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-1 right-3 text-gray-800 hover:text-gray-400"
              onClick={() => setShowDetailsModal(false)}
            >
              ✕
            </button>
            <div className="text-left">
              <img
                src={currentRoomDetails.img}
                alt={currentRoomDetails.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">
                {currentRoomDetails.name}
              </h3>
              <div className="mb-4">
                <p className="text-gray-600">
                  <strong>Room Size:</strong> {currentRoomDetails.size}
                </p>
                <p className="text-gray-600">
                  <strong>Bedroom:</strong> {currentRoomDetails.bedroom}
                </p>
                <p className="text-gray-600">
                  <strong>Living Room:</strong> {currentRoomDetails.livingRoom}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Amenities</h4>
                <ul className="list-disc pl-5">
                  {currentRoomDetails.amenities.map((amenity, index) => (
                    <li key={index} className="text-gray-600">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold">Price</h4>
                <p className="text-lg font-bold">{currentRoomDetails.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsPage;
