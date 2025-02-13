import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../image/manu.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Four() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 py-10 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Content */}
        <div
          className="lg:w-1/2 space-y-6 text-white"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold hover:text-gray-300 transition duration-300">
            EVERYTHING BEGINS WITH QUALITY
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 transition duration-300">
              Rival Wears approach quality affirmation method, expecting to
              recognize and forestall potential dangers on pre-production stage.
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              Our quality affirmation, arranging, sourcing, and creation offices
              work in concordance centering into minimizing cost of value and
              creating on-time shipment execution, risk-free and quality
              products to our client.
            </li>
          </ul>

          <h2 className="text-3xl font-bold hover:text-gray-300 transition duration-300">
            MATERIAL & FABRIC SOURCING
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 transition duration-300">
              We take away the headache of sourcing materials for you. We
              provide sourcing services as part of your Products manufacturing
              project and can help source high-quality fabrics, made specially
              to your specifics.
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              Have your own fabrics and materials? Great! If not, we will help
              solve this for you.
            </li>
          </ul>

          <h2 className="text-3xl font-bold hover:text-gray-300 transition duration-300">
            CUT & PRINTING PROCESS
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 transition duration-300">
              Not many Manufacturers can offer this level of guidance when it
              comes to cost breakdown and explaining all the steps of
              production.
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              We carefully clarify every aspect of manufacturing and work to
              build a long-lasting relationship.
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              With Rival Wears, you will never experience costs or charges that
              you did not approve.
            </li>
          </ul>

          <h2 className="text-3xl font-bold hover:text-gray-300 transition duration-300">
            SEWING AND FINISHING LINES
          </h2>
          <p className="hover:text-gray-300 transition duration-300">
            Focusing on amazing outcomes, we specialize in dynamic sports-type
            sewing that requires technical skills. Our automation processes
            ensure top-quality production output. Additionally, we continuously
            train our staff to maximize their potential and expertise.
          </p>

          <h2 className="text-3xl font-bold hover:text-gray-300 transition duration-300">
            HIGHEST QUALITY PRODUCTION
          </h2>
          <p className="hover:text-gray-300 transition duration-300">
            No compromise when it comes to price or quality. Our customers fall
            in love with our quality, and our reviews speak for themselves.
            Rival Wears guarantees you are working with a manufacturing factory
            directly, not an agent.
          </p>

          <h2 className="text-3xl font-bold hover:text-gray-300 transition duration-300">
            DELIVERY TO YOUR DOORSTEP
          </h2>
          <p className="hover:text-gray-300 transition duration-300">
            We deliver your order right to your doorstep, no matter where you
            are in the world. All production and sampling deliveries come with a
            tracking number as we work with the most reliable couriers to ensure
            the lowest shipping costs.
          </p>

          {/* About Us Button */}
          <div>
            <Link
              to="/about"
              className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-300 hover:scale-105"
            >
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="lg:w-1/2 flex justify-center pt-10 lg:pt-0"
          data-aos="fade-right"
        >
          <img
            src={client}
            alt="Client"
            className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Four;
