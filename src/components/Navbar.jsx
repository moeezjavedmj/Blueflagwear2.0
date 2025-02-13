import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import logo from "../Image/logo2.png";

// Category data
import hoddieImage from '../Image/Hoodies.jpg';
import sweatshirtImage from '../Image/SweatShirt1.jpg';
import joggersImage from '../Image/Jogger_1.jpg';
import cropstopsImage from '../Image/Crop and tops .jpg';
import shirtsImage from '../Image/Tshirt_1.jpg';
import jacketsImage from '../Image/bomberjacket_1.jpg';
import hatsandcapsImage from '../Image/cap1.jpg';
import gymwearImage from '../Image/Crop and tops 6.jpg';
import flashshirtImage from '../Image/flashy shirt_1.jpg';
import denimshortsImage from '../Image/denim shorts1.jpg';
import denimjacketsImage from '../Image/denim jackets1.jpg';
import cyclingwearImage from '../Image/cycliing uniform 1.jpg';
import bikeuniformImage from '../Image/motor bikes 1.jpg';
import huntingandfishwearImage from '../Image/fishing and hunting 1.jpg';
import workwearImage from '../Image/work wear 1.jpg';
import mmaImage from '../Image/GlovesMMA.jpg';
import americanwearuniformImage from '../Image/Americanwear_unifrom.jpg';
import baseballuniformImage from '../Image/Backetball 1.jpg';
import basketballuniformsImage from '../Image/Basketball 1.jpg';
import cricketuniformsImage from '../Image/CricketUniform.jpg';
import bomberjacketImage from '../Image/bomberjacket_3.jpg';
import coachjacketImage from '../Image/coach_jacket_1.jpg';
import logo from "../Image/logo2.png";

// Create categories array
const categories = [
    { name: "Hoodies", path: "/categories/Hoodies", imgSrc: hoddieImage },
    { name: "Sweatshirt", path: "/categories/Sweatshirt", imgSrc: sweatshirtImage },
    { name: "Joggers", path: "/categories/Joggers", imgSrc: joggersImage },
    { name: "Crop Tops", path: "/categories/Cropstops", imgSrc: cropstopsImage },
    { name: "All Shirts", path: "/categories/Shirts", imgSrc: shirtsImage },
    { name: "Jackets", path: "/categories/Jackets", imgSrc: jacketsImage },
    { name: "Hats and Caps", path: "/categories/Hatsandcaps", imgSrc: hatsandcapsImage },
    { name: "Gym Wear", path: "/categories/Gymwear", imgSrc: gymwearImage },
    { name: "Flash Shirts", path: "/categories/Flashshirt", imgSrc: flashshirtImage },
    { name: "Denim Shorts", path: "/categories/Denimshorts", imgSrc: denimshortsImage },
    { name: "Denim Jackets", path: "/categories/Denimjackets", imgSrc: denimjacketsImage },
    { name: "Cycling Wear", path: "/categories/Cyclingwear", imgSrc: cyclingwearImage },
    { name: "Motor Bike Uniform", path: "/categories/Bikeuniform", imgSrc: bikeuniformImage },
    { name: "Hunting and Fish Wear", path: "/categories/Huntingandfishwear", imgSrc: huntingandfishwearImage },
    { name: "Work Wear", path: "/categories/Workwear", imgSrc: workwearImage },
    { name: "MMA", path: "/categories/Mma", imgSrc: mmaImage },
    { name: "American Wear Uniforms", path: "/categories/Americanwearuniform", imgSrc: americanwearuniformImage },
    { name: "Baseball Uniforms", path: "/categories/Baseballuniform", imgSrc: baseballuniformImage },
    { name: "Basketball Uniforms", path: "/categories/Basketballuniforms", imgSrc: basketballuniformsImage },
    { name: "Cricket Uniforms", path: "/categories/Cricketuniforms", imgSrc: cricketuniformsImage },
    { name: "Bomber Jackets", path: "/categories/Bomberjacket", imgSrc: bomberjacketImage },
    { name: "Coach Jackets", path: "/categories/Coachjacket", imgSrc: coachjacketImage },
];


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    return (
        <nav className="bg-gradient-to-r from-black to-gray-900 animate-gradient-xy dark:bg-gray-900 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 transition-all duration-500 ease-in-out">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
    src={logo}
    className="h-12 transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
    alt="Logo"
/>

                <span
                    style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        textShadow: '1px 1px 2px rgba(0, 0, 255, 0.5)',
                        letterSpacing: '0.05em',
                        // color: 'whitesmoke',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#333'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'whitesmoke'}
                >
                    BlueFlagWears
                </span>
            </a>

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
                {/* <NavLink to="/Cart" className="btn btn-outline-dark ms-3" style={{fontSize:"0.7rem"}}><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink> */}


                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-transform duration-500 hover:rotate-180"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <div
                id="mega-menu-full"
                className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            >
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                    <li><NavLink to="/" className="block py-2 px-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 ease-in-out">Home</NavLink></li>
                    <li><NavLink to="/Products" className="block py-2 px-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 ease-in-out">Products</NavLink></li>
                    <li>
                        <div className="relative">
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-300 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 ease-in-out"
                                onClick={toggleDropdown}
                                aria-expanded={isDropdownOpen}
                                aria-controls="mega-menu-full-dropdown"
                            >
                                Categories
                                <svg className="w-2.5 h-2.5 ms-3 transition-transform duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li><NavLink to="/ContactPage" className="block py-2 px-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 ease-in-out">Contact Us</NavLink></li>
                    <li><NavLink to="/AboutPage" className="block py-2 px-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-500 ease-in-out">About Us</NavLink></li>
                    {/* <li>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={isSidebarOpen}
                                onChange={toggleSidebar}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"></div>
                            <span className="ms-3 text-sm font-medium text-gray-300 dark:text-gray-300">
                                {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                            </span>
                        </label>
                    </li> */}
                </ul>
            </div>
        </div>

        {isDropdownOpen && (
<div id="mega-menu-full-dropdown" className="mt-1 bg-white border-y border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div className="grid grid-cols-1 gap-6 px-4 py-5 mx-auto text-gray-900 md:grid-cols-3 lg:grid-cols-4 md:px-6">
        {categories.map((category, index) => (
            <NavLink
                key={index}
                to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-3 rtl:space-x-reverse p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
                <img
                    src={category.imgSrc}
                    alt={category.name}
                    className="w-40 h-40 object-cover rounded-full transition-transform duration-300 ease-in-out transform hover:rotate-12"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{category.name}</span>
            </NavLink>
        ))}
    </div>
</div>
)}

</nav>

    );
};

export default Navbar;
