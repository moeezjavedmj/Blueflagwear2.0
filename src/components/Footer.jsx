import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "./image/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-28 mb-4" />
            <p className="text-gray-400 text-sm">Quality Sportswear Since 2024</p>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition">
                <Phone size={18} /> <a href="tel:+923364272446">+92 336 4272446</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition">
                <MapPin size={18} /> Murray College Road, Sialkot
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition">
                <Mail size={18} /> <a href="mailto:blueflagwears@outlook.com">blueflagwears@outlook.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li><NavLink to="/contact" className="hover:text-blue-400 transition">Help Center</NavLink></li>
              <li><NavLink to="/termofservice" className="hover:text-blue-400 transition">Terms of Use</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</NavLink></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/blueflag_wears" className="text-gray-400 hover:text-pink-500 transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4 text-gray-400 text-sm">
          <p>&copy; 2024 <span className="font-semibold text-white">BLUEFLAGWEARS</span> | <NavLink to="/privacy" className="hover:text-blue-400 transition">Privacy & Legal</NavLink></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
