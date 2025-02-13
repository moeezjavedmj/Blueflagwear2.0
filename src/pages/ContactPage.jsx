import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (message.split(" ").length > 250) {
      setErrorMessage("Message should not exceed 250 words");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send("service_0mxptq6", "template_1qvok7r", formData, "AoW94_nO2L46_BR5h");
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("An error occurred while sending the email. Please try again later.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    
      <div className="container mx-auto px-6 py-10 bg-gradient-to-r from-black to-gray-900">
        <motion.h1
          className="text-center text-3xl font-bold text-white-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <hr className="w-1/3 mx-auto my-4 border-gray-300" />
        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {errorMessage && (
              <div className="mb-4 text-red-500 text-sm text-center">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="name@example.com" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message" 
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      {showModal && (
        <motion.div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg w-96 text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800">Success!</h2>
            <p className="text-gray-600 mt-2">Your message has been submitted 👍</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    
    </>
  );
};

export default Contact;