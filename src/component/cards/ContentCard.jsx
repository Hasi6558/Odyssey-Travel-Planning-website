import React from 'react';
import ContentImage from '../../assets/images/signup_background.png';
import RatingBar from '../bars/RatingBar';
import locationLogo from '../../assets/icons/mdi_location.png';

const ContentCard = ({ RatingCount, price, title, location_city, destination_link }) => {
    return (
        <div className="w-full overflow-hidden rounded-xl shadow-lg bg-white flex flex-col">

            {/* Image Section */}
            <div className="w-full h-48">
                <a href={destination_link}>
                    <img
                        src={ContentImage}
                        alt="Background"
                        className="w-full h-full object-cover transform transition duration-300 hover:scale-110 hover:opacity-90"
                    />
                </a>
            </div>

            {/* Content Section */}
            <a href={destination_link} className="flex flex-col justify-between h-full">
                <div className="p-4">
                    {/* Rating and Price */}
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <RatingBar totalDots={5} rating={3} />
                            <span className="ml-2 text-sm text-stone-400 font-bold">{RatingCount}</span>
                        </div>
                        <span className="text-green-700 font-bold text-lg">{price} $</span>
                    </div>

                    {/* Title */}
                    <p className="text-base font-semibold text-justify">{title}</p>
                </div>

                {/* Location */}
                <div className="flex items-center px-4 pb-4 text-sm">
                    <img src={locationLogo} alt="Location Icon" className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{location_city}</span>
                </div>
            </a>
        </div>
    );
};

export default ContentCard;
