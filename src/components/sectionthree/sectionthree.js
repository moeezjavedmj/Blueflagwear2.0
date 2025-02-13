import React from "react";
import { Link } from "react-router-dom";
import client from "../image/800x660.png";
import { motion } from "framer-motion";

function SectionThree() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="min-h-screen flex items-center bg-gradient-to-r from-black to-gray-900 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, translateX: "-10%" }}
          whileInView={{ opacity: 1, translateX: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            CUSTOMIZE YOUR PRODUCT AT <br />
            <span className="text-yellow-400">FACTORY PRICE</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Get high-quality customizations at unbeatable prices.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              CONTACT US
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, translateX: "10%" }}
          whileInView={{ opacity: 1, translateX: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src={client}
            alt="Client"
            className="w-80 sm:w-96 md:w-full max-w-md rounded-lg shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SectionThree;
