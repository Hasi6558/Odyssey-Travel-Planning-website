import React from 'react';
import Logo from '../../assets/images/logo.png';
import SignUpBackground from '../../assets/images/signup_background.png';

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200">
        <img
          src={SignUpBackground}
          alt="Sign Up Background"
          className="object-cover w-full h-full"
        />
      </div>


      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <img src={Logo} alt="logo" className="w-24 mb-6" />
        <div className="w-full max-w-sm">
          <p className="text-left text-gray-600 text-sm">Welcome to Odyssey travel guides</p>
          <h1 className="text-left text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>

          <form>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="fullname">Full Name</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <i className="fa-regular fa-user text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="fullname"
                  placeholder="ex: John Chadwick"
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <i className="fa-regular fa-envelope text-gray-400 mr-2"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="ex: john@gmail.com"
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <i className="fa-regular fa-eye text-gray-400 mr-2"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="**********"
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>


            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-600">
                I’ve read and agree to <a href="#" className="text-blue-600 hover:underline">Terms & conditions</a>
              </label>
            </div>


            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition">
              Sign Up
            </button>
          </form>


          <p className="text-center text-gray-600 mt-6">
            Already have an account? <span className="text-blue-600 cursor-pointer hover:underline"><a href="/login">Sign In</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
