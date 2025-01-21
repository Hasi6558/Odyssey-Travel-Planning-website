import React from 'react'
import Logo from '../../assets/images/logo.png'
import LoginBackground from '../../assets/images/background_login.png'
import BlueButton1 from '../../component/Buttons/BlueButton1'
import InputFieldSet from '../../component/fieldSets/InputFieldSet'
import GoogleLogo from '../../assets/images/googleLogo.png'
import FbLogo from '../../assets/images/fbLogo.png'
import AppleLogo from '../../assets/images/appleLogo.png'

import SocialMediaButton from '../../component/Buttons/SocialMediaButton'

function LogIn() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
                <a href='/'> <img src={Logo} alt="logo" className="w-24 mb-6" /></a>

                <div className="w-full max-w-sm">
                    <p className="text-left text-gray-600 text-sm">Start your journey</p>
                    <h1 className="text-left text-2xl font-bold text-gray-800 mb-6">Sign in to Odyssey</h1>

                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                            <div className="flex items-center border rounded-md px-3 py-2">
                                <i className="fa-regular fa-envelope text-gray-400 mr-2"></i>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    className="w-full outline-none text-gray-700"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
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

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition">
                            Sign in
                        </button>
                    </form>

                    <fieldset className="mt-8 text-center">
                        <legend className="text-gray-500 text-sm">or sign in with</legend>
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                                <img src={GoogleLogo} alt="Google" className="w-6" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                                <img src={FbLogo} alt="Facebook" className="w-6" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                                <img src={AppleLogo} alt="Apple" className="w-6" />
                            </button>
                        </div>
                    </fieldset>

                    <p className="text-center text-gray-600 mt-6">
                        Have no account? <span className="text-blue-600 cursor-pointer hover:underline">Sign Up</span>
                    </p>
                </div>
            </div>


            <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200">
                <img
                    src={LoginBackground}
                    alt="Login Background"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
}

export default LogIn;
