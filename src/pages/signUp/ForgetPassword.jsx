import React from 'react'
import Logo from '../../assets/images/logo.png';
import SignUpBackground from '../../assets/images/signup_background.png';

const ForgetPassword = () => {
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
           
        
 
           <form>
 
            
 
             <div className="mb-4">
               <label className="block text-sm font-medium text-gray-600" htmlFor="password">New Password</label>
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
             <div className="mb-4">
               <label className="block text-sm font-medium text-gray-600" htmlFor="password">Re-enter Password</label>
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
               Change Password
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

export default ForgetPassword