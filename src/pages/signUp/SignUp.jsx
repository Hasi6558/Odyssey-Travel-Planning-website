import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../../assets/images/logo.png';
import SignUpBackground from '../../assets/images/signup_background.png';
import { add } from 'date-fns';
import ApiService from '../../service/ApiService';


function SignUp() {
  const [userData, setUserData] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', address: '', role: 'REGULAR_USER' });
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const navigate = useNavigate();
  const checkPassword = (e) => {
    const cpassword = e.target.value;
    if (userData.password === cpassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }

  const submitData = async () => {
    try {
      const response = await ApiService.registerUser(userData);
      if (response.status === 200) {
        console.log('User registered successfully');
        setUserData({ firstName: '', lastName: '', username: '', email: '', password: '', address: '', role: 'REGULAR_USER' });
        navigate('/login');
      } else {
        console.error(response);
        setError('User registration failed');
      }
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  }
  useEffect(() => {
    if (passwordMatch) {
      setError('');
      if (terms) {
        if (userData.firstName && userData.lastName && userData.username && userData.email && userData.password) {
          setBtnDisabled(false);
        } else {
          setBtnDisabled(true);
          setError('Please fill all the fields');
        }
      } else {
        setBtnDisabled(true);
        setError('Please accept the terms & conditions');
      }
    } else {
      setBtnDisabled(true);
      setError('Passwords do not match');
    }
  }, [userData, terms, passwordMatch]);

  return (
    <div className="min-h-screen h-full flex flex-col md:flex-row bg-gray-100 register">

      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200">
        <img
          src={SignUpBackground}
          alt="Sign Up Background"
          className="object-cover w-full h-full"
        />
      </div>


      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <img src={Logo} alt="logo" className="w-24 mb-6" />
        <div className="w-full p-[20px] max-w-[600px]">
          <p className="text-left text-gray-600 text-sm">Welcome to Odyssey travel guides</p>
          <h1 className="text-left text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>

          <div className="form">
            <div className="mb-4 flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="firstName">First Name</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <i className="fa-regular fa-user text-gray-400 mr-2"></i>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="ex: John"
                    className="w-full outline-none text-gray-700"
                    required
                    value={userData.firstName}
                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="lastName">Last Name</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <i className="fa-regular fa-user text-gray-400 mr-2"></i>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="ex: Nolan"
                    className="w-full outline-none text-gray-700"
                    required
                    value={userData.lastName}
                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  />
                </div>
              </div>
            </div>


            <div className="mb-4 flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="username">Username</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <i className="fa-regular fa-user text-gray-400 mr-2"></i>
                  <input
                    type="text"
                    id="username"
                    placeholder="ex: John"
                    className="w-full outline-none text-gray-700"
                    required
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <i className="fa-regular fa-envelope text-gray-400 mr-2"></i>
                  <input
                    type="email"
                    id="email"
                    placeholder="ex: john@gmail.com"
                    className="w-full outline-none text-gray-700"
                    required
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <i className="fa-regular fa-eye text-gray-400 mr-2"></i>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    placeholder="**********"
                    className="w-full outline-none text-gray-700"
                    required
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="cpassword">Confirm Password</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <i className="fa-regular fa-eye text-gray-400 mr-2"></i>
                  <input
                    type="password"
                    id="cpassword"
                    name='cpassword'
                    placeholder="**********"
                    className="w-full outline-none text-gray-700"
                    required
                    onChange={checkPassword}
                  />
                </div>
              </div>
            </div>


            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={(e) => setTerms(e.target.checked)}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-600">
                I’ve read and agree to <a href="#" className="text-blue-600 hover:underline">Terms & conditions</a>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              className={`${btnDisabled ? "bg-gray-400 disabled-btn" : "bg-blue-600 hover:bg-blue-700 transition"} w-full text-white py-2 rounded-md text-center`}
              disabled={btnDisabled}
              onClick={submitData}
            >
              Sign Up
            </button>
          </div>


          <p className="text-center text-gray-600 mt-6">
            Already have an account? <span className="text-blue-600 cursor-pointer hover:underline"><a href="/login">Sign In</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
