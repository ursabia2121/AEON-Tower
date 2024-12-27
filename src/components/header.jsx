import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-gray-600" />
            <span>(+12) 345 678 90</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-600" />
            <span>info.aeontower@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaTwitter className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
            BOOKING NOW
          </button>
          <div className="flex items-center space-x-1">
            <BiWorld />
            <span>EN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
