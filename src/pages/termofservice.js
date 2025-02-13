import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Termofservice = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-400">
            Terms of Service
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            This website is operated by BlueFlagWears. Throughout the site, the terms “we”, “us” and “our” refer to BlueFlagWears. BlueFlagWears offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
              SECTION 1 - ONLINE STORE TERMS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
              SECTION 2 - GENERAL CONDITIONS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to refuse Service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Termofservice;
