import React, { useState, useEffect } from "react";
import BookingForm from "./booking_form"; // Import the BookingForm component
import { FaFacebook } from "react-icons/fa"; // Import Facebook icon from react-icons


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false); // Modal state for booking
  const [showContactModal, setShowContactModal] = useState(false); // Modal state for contact

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Company Logo */}
          <div
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            AEON Tower Suites & Hotel by CMC
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#home"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Home
            </a>
            <div className="relative group">
              <span
                className={`cursor-pointer ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Rooms
              </span>
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Deluxe Double Studio
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Deluxe Suite
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Superior Suite
                </li>
              </ul>
            </div>
            <a
              href="#about"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              About
            </a>
            <button
              onClick={() => setShowContactModal(true)} // Open contact modal
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setShowBookingModal(true)} // Open booking modal
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white text-gray-800 space-y-4 p-4">
            <a href="#home" className="block">
              Home
            </a>
            <a href="#rooms" className="block">
              Rooms
            </a>
            <a href="#about" className="block">
              About
            </a>
            <button onClick={() => setShowContactModal(true)} className="block">
              Contact
            </button>
            <button
              onClick={() => setShowBookingModal(true)} // Open booking modal
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-4 rounded shadow-lg w-full max-w-md overflow-y-auto"
            style={{ maxHeight: "75vh", maxWidth: "800px" }}
          >
            <button
              className="text-gray-100 hover:text-gray-800 absolute top-4 right-4"
              onClick={() => setShowBookingModal(false)} // Close booking modal
            >
              ✕
            </button>
            <BookingForm />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded shadow-lg w-full max-w-sm text-center"
            style={{ maxHeight: "75vh" }}
          >
            <button
              className="text-gray-100 hover:text-gray-800 absolute top-4 right-4"
              onClick={() => setShowContactModal(false)} // Close contact modal
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-2">J. P. Laurel Avenue, Davao City</p>
            <p className="text-gray-700 mb-2">Email: support@aeontower.com</p>
            <p className="text-gray-700 mb-4">Phone: +1 234 567 890</p>
            <a
              href="https://www.facebook.com/people/Aeon-Tower-Suites-And-Hotel-by-CMC/61568387316334/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
