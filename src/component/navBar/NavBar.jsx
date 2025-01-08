import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../../assets/images/logo.png';

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-32 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden flex flex-col justify-between h-6 w-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-full bg-gray-800 transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}
          ></span>
          <span
            className={`block h-1 w-full bg-gray-800 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''
              }`}
          ></span>
          <span
            className={`block h-1 w-full bg-gray-800 transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}
          ></span>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-white w-full lg:w-auto transition-all duration-300 ${menuOpen ? 'top-16 left-0 shadow-md p-4' : 'top-[-300px]'
            }`}
        >
          <li
            className="text-gray-800 font-medium cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500"
            onClick={() => {
              setMenuOpen(false);
              navigate('/');
            }}
          >
            Home
          </li>
          <li
            className="text-gray-800 font-medium cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500"
            onClick={() => {
              setMenuOpen(false);
              navigate('/hotel');
            }}
          >
            Hotel
          </li>
          <li
            className="text-gray-800 font-medium cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500"
            onClick={() => {
              setMenuOpen(false);
              navigate('/restaurant');
            }}
          >
            Restaurant
          </li>
          <li
            className="text-gray-800 font-medium cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500"
            onClick={() => {
              setMenuOpen(false);
              navigate('/tours');
            }}
          >
            Tours
          </li>
          <li
            className="text-gray-800 font-medium cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500"
            onClick={() => {
              setMenuOpen(false);
              navigate('/tripPlanner');
            }}
          >
            Plan Trip
          </li>
          <li
            className="text-gray-800 font-medium cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500"
            onClick={() => {
              setMenuOpen(false);
              navigate('/blog');
            }}
          >
            Blog
          </li>
        </ul>

        {/* Profile Section */}
        <div className="hidden lg:flex items-center space-x-2">
          <a href="/profilePage">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </a>


          <span className="font-medium text-gray-800">Hi, User</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
