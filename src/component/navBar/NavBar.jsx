import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Logo from '../../assets/images/logo.png';
import ApiService from '../../service/ApiService';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('authToken');
  const [user, setUser] = useState({});

  const isActive = (path) => location.pathname == path;

  async function getUser() {
    try {
      const response = await ApiService.getUserById(userId, token);
      if (response.status === 200) {
        console.log('User fetched successfully');
        setUser(response.data);
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
  useEffect(() => {
    if (userId != undefined) {
      getUser();
    }
  }, [userId]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-[20px] max-w-full">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">

        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-32 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

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

        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-white w-full lg:w-auto transition-all duration-300 ${menuOpen ? 'top-16 left-0 shadow-md p-4' : 'top-[-300px]'
            }`}
        >
          {[
            { label: 'Home', path: '/' },
            { label: 'Hotel', path: '/hotel' },
            { label: 'Restaurant', path: '/restaurant' },
            { label: 'Tours', path: '/tours' },
            { label: 'Plan Trip', path: '/tripPlanner' },
            { label: 'Blog', path: '/blog' },
          ].map((item) => (
            <li
              key={item.path}
              className={`cursor-pointer py-2 px-4 lg:py-0 hover:text-blue-500 ${isActive(item.path) ? 'text-blue-600 font-bold' : 'text-gray-800 font-medium '
                }`}
              onClick={() => {
                setMenuOpen(false);
                navigate(item.path);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-2">
          {/* <a href="/profilePage">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </a> */}
          {/* <span className="font-medium text-gray-800">Hi, User</span> */}
          {
            (userId != undefined) && (
              <div className="flex gap-2 align-middle justify-center">
                <span className="font-medium text-gray-800 h-fit cursor-pointer" onClick={() => navigate('/profilePage')}>Welcome, {user?.username}</span>
                {/* <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-md"
                  onClick={() => {
                    localStorage.clear();
                    navigate('/');
                  }}>
                  Logout
                </button> */}
              </div>
            )
          }
          {(userId == undefined) && <div className="flex gap-2">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
          </div>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
