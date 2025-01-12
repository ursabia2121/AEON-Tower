import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About AEON Tower</h2>
          <p className="text-gray-400">
            AEON Tower is a landmark of sophistication and luxury in Davao City. As one of Mindanao's
            tallest buildings, it offers modern design, premium amenities, and breathtaking city views.
            AEON Tower Suites provides unmatched comfort and style, making it the perfect choice for
            travelers seeking a luxury hotel experience in Davao City.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#rooms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Rooms
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400">J. P. Laurel Avenue, Davao City</p>
          <p className="text-gray-400">Email: support@aeontower.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61568387316334"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2024 AEON Tower Suites & Hotel by CMC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
