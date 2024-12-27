import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <a
            href="#contact"
            className={`hover:text-blue-600 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </a>
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Book Now
          </a>
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
          <a href="#contact" className="block">
            Contact
          </a>
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
