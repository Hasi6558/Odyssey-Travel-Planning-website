import React from 'react'
import hasinduImage from "../../assets/images/developers/hasindu.jpg";
import ThusithaImage from "../../assets/images/developers/thusitha.png";
import ThisaraImage from "../../assets/images/developers/thisara.jpeg";
import Footer from '../../component/Footer/Footer';



const About = () => {

    const developers = [
        {
          name: "Mr. Hasindu Liyanage",
          role: "Undergraduate of university of kelaniya",
          image: hasinduImage,
        },
        {
          name: "Mr. Thusitha Kithuldora",
          role: "Undergraduate of university of kelaniya",
          image: ThusithaImage,
        },
        {
          name: "Mr. Thisara Yashodha",
          role: "Undergraduate of university of kelaniya",
          image: ThisaraImage,
        },
      ];
      
      return (
        
        <div className="max-w-5xl mx-auto p-8 text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-6">About Odyssey Travel Planner</h1>
          <p className="text-lg text-center mb-6">
            Odyssey Travel Planner is your ultimate travel companion, offering a seamless experience for discovering hotels, restaurants, and tours. With our itinerary planner, users can create and customize their travel plans effortlessly. Whether you are an adventurer or a leisure traveler, Odyssey Travel Planner ensures you have the best experience possible.
          </p>
          
          <h2 className="text-3xl font-semibold text-center mb-4">Meet Our Developers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {developers.map((dev, index) => (
              <div key={index} className="text-center p-4 border rounded-lg shadow-lg">
                <img src={dev.image} alt={dev.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{dev.name}</h3>
                <p className="text-gray-600">{dev.role}</p>
                
              </div>
            ))}
          </div>
          
        </div>
        
      );
}

export default About