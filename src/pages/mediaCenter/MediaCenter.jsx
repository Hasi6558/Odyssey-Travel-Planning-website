import React, { useEffect, useState } from "react";
import About from "./About";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import ContactUs from "./ContactUs";
import { useParams } from "react-router";
import BackgroundImage from '../../assets/images/media_center_bg.jpg'
import Footer from "../../component/Footer/Footer";
import Logo from '../../assets/icons/odyssey-logo-single.png'

const MediaCenter = () => {
    const {tab} = useParams();
    useEffect(()=>{
        
        
        switch(tab){
            case "0" : setCurrentIndex(0);
            break;
            case "1": setCurrentIndex(1);
            break;
            case "2" :setCurrentIndex(2);
            break;
            case "3" : setCurrentIndex(3);
            break;
            default :setCurrentIndex(0);
        }
    },[tab]);

    const [currentIndex ,setCurrentIndex ]= useState(0);

    const handleClickAbout=()=>{
        setCurrentIndex(0);
    }   
    const handleClickTerms=()=>{
        setCurrentIndex(1);
    }
    const handleClickPolicy=()=>{
        setCurrentIndex(2);
    }
    const handleClickContact=()=>{
        setCurrentIndex(3);
    }
  return (
    
    <>
    <div className="relative w-full h-screen">
      
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

        <div className="absolute top-10 left-14 z-50">
           
            <a href="/"><img src={Logo} className="h-8 text-white"/></a>
        </div>
      
      <div className="relative flex flex-col items-center justify-center h-1/2 text-white">
        <h1 className="text-5xl font-bold">Media Center</h1>
      </div>

      <div className="absolute top-[350px] left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md w-full max-w-4xl flex justify-around p-4 rounded-t-lg">
        <button className="hover:underline" onClick={handleClickAbout}>About Odyssey</button>
        <button className="hover:underline" onClick={handleClickTerms}>Terms and conditions</button>
        <button className="hover:underline" onClick={handleClickPolicy}>Privacy policy</button>
        <button className="hover:underline" onClick={handleClickContact}>Contact Us</button>
      </div>
     
      
      <div className="mt-20 max-w-[1100px] m-auto">
            <div>{currentIndex===0?(<About/>):("")}</div>
            <div>{currentIndex===1?(<TermsAndConditions/>):("")}</div>
            <div>{currentIndex===2?(<PrivacyPolicy/>):("")}</div>
            <div>{currentIndex===3?(<ContactUs/>):("")}</div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
    </>
  );
};

export default MediaCenter;
