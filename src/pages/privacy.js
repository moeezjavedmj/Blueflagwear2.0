import React from "react";
import { motion } from "framer-motion";


const PrivacyPolicy = () => {
  return (
    <>
      {/* Full-page gradient background */}
      <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen text-gray-300">
        {/* Navbar */}
   

        {/* Centered content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.h2
            className="text-3xl font-bold text-yellow-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h2>

          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            This Privacy Policy describes how Blueflagwears ("we", "us", or "our") collects, uses, and discloses your personal information when you visit or use our services.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold text-yellow-400 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Changes to This Privacy Policy
          </motion.h3>

          <motion.p
            className="leading-relaxed mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold text-yellow-400 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How We Collect and Use Your Information
          </motion.h3>

          <motion.ul
            className="list-disc list-inside space-y-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <li>We collect your name, email, and order details when you make a purchase.</li>
            <li>We use cookies to enhance your browsing experience.</li>
            <li>We may share your information with trusted partners to provide better services.</li>
          </motion.ul>

          <motion.h3
            className="text-2xl font-semibold text-yellow-400 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h3>

          <motion.p
            className="leading-relaxed mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            If you have any questions, please contact us at{" "}
            <span className="text-yellow-400">blueflagwears@gmail.com</span>.
          </motion.p>
        </div>

        {/* Footer */}
       
      </div>
    </>
  );
};

export default PrivacyPolicy;
