import React from 'react';
import ContentImage from '../../assets/images/signup_background.png';
import RatingBar from '../bars/RatingBar';
import locationLogo from '../../assets/icons/location_logo_2.png';

const ContentCard = ({ id, RatingCount, title, location_city, Ratings, imgUrl, destination_link }) => {
    return (
        <div className="w-full overflow-hidden rounded-xl shadow-lg bg-white flex flex-col">


            <div className="w-full h-48 overflow-hidden">
                <a href={destination_link}>
                    {imgUrl ? (
                        <img
                            src={imgUrl}
                            alt="Background"
                            className="w-full h-full object-cover transform transition duration-300 hover:scale-110 hover:opacity-90"
                        />
                    ) : (
                        <img
                            src={ContentImage}
                            alt="Default Background"
                            className="w-full h-full object-cover transform transition duration-300 hover:scale-110 hover:opacity-90"
                        />
                    )}
                </a>
            </div>


            <a href={`/hotel-details/${id}`} className="flex flex-col ">
                <div className="p-4">

                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <RatingBar totalDots={5} rating={Math.round(Ratings)} />
                            <span className="ml-2 text-sm text-stone-400 font-bold">{RatingCount}</span>
                        </div>

                    </div>


                    <p className="text-base font-semibold text-justify">{title}</p>
                </div>


                <div className="flex items-center px-4 pb-4 text-sm">
                    <img src={locationLogo} alt="Location Icon" className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{location_city}</span>
                </div>
            </a>
        </div>
    );
};

export default ContentCard;
