import React from 'react'
import { FaHome, FaEnvelope, FaPhone, FaFax } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaHome className="text-2xl text-blue-600" />
              <p className="text-lg">187/2, 3rd Cross Street, Colombo</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-blue-600" />
              <p className="text-lg">info@odyssey@gmail.com</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-blue-600" />
              <p className="text-lg">+94 116225522</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaFax className="text-2xl text-blue-600" />
              <p className="text-lg">+94 116225523</p>
            </div>
          </div>
        </div>
      );
}

export default ContactUs