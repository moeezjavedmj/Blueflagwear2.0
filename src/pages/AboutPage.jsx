import React from 'react';

import image1 from "../components/image/02-15-600x600.jpg";
import image2 from "../components/image/02-18-600x600.jpg";
import image3 from "../components/image/03-6-300x300.jpg";
import image4 from "../components/image/06-300x300.jpeg";

const AboutPage = () => {
  return (
    <>
      
      <div className="container mx-auto px-4 py-10 bg-gradient-to-r from-black to-gray-900">
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">About Us</h1>
        <hr className="border-gray-300 dark:border-gray-700 mb-6" />
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed animate-fade-in-up">
          At <span className="font-bold text-blue-600">Blue Flag Wear</span>, we are passionate about providing top-notch clothing and apparel tailored to meet your style and comfort needs. Our journey is built on integrity, innovation, and customer satisfaction. We strive to offer premium products that fit every lifestyle, from casual wear to sports gear. Join our community and experience fashion that blends style with reliability.
        </p>

        <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mt-12 mb-6 animate-fade-in">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[{ img: image1, title: "Coach Jacket" }, { img: image2, title: "Joggers" }, { img: image3, title: "Boxing Gloves" }, { img: image4, title: "Jackets" }].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in">
              <img className="w-full h-56 object-cover" src={item.img} alt={item.title} />
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
 
    </>
  );
};

export default AboutPage;
