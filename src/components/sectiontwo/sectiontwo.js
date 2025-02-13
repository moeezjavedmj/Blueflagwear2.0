import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import street from "../image/Street.jpg";
import Fitness from "../image/Fitness-3.jpg";
import Sport from "../image/Sports-2.jpg";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function SectionTwo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex items-center justify-center p-4"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Sports Image */}
        <motion.div
          variants={fadeInVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Link to="/categories/Americanwearuniform">
            <motion.img
              src={Sport}
              alt="Sports"
              className="w-full h-auto transition-transform duration-500 hover:brightness-75 rounded-lg"
            />
          </Link>
        </motion.div>

        {/* Fitness Image */}
        <motion.div
          variants={fadeInVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Link to="/categories/Gymwear">
            <motion.img
              src={Fitness}
              alt="Fitness"
              className="w-full h-auto transition-transform duration-500 hover:brightness-75 rounded-lg"
            />
          </Link>
        </motion.div>

        {/* Street Image */}
        <motion.div
          variants={fadeInVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Link to="/categories/Shirts">
            <motion.img
              src={street}
              alt="Street"
              className="w-full h-auto transition-transform duration-500 hover:brightness-75 rounded-lg"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SectionTwo;
