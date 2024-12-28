import React from 'react';
import ContentImage from '../../assets/images/signup_background.png';
import RatingBar from '../bars/RatingBar'
import locationLogo from '../../assets/icons/mdi_location.png'

const ContentCard = ({ RatingCount, price, title, location_city, destination_link }) => {
    return (

        <div className="w-60 h-90 overflow-hidden rounded-xl shadow-lg bg-white">

            <div className="w-full h-48">
                <a href={destination_link}>
                    <img src={ContentImage} alt="Background" className="w-full h-full object-cover transform transition duration-300 hover :scale-110 hover:opacity-90" />
                </a>

            </div>
            <a href={destination_link}>
                <div className='flex justify-between p-2'>
                    <div className="flex items-center ">
                        <RatingBar totalDots={5} rating={3} />
                        <span className='text-sm text-stone-400 font-bold'>{RatingCount}</span>
                    </div>

                    <span className='text-green-700 font-bold text-lg'>{price} $</span>
                </div>
                <div>
                    <p className='text-base font-semibold px-2 text-justify pb-2'>{title}</p>
                </div>
                <div className='flex text-sm pb-2 items-center'>
                    <span ><img src={locationLogo} alt="" className='px-2 w-8' /></span>
                    <span className='font-semibold'>{location_city}</span>
                </div>
            </a>



        </div>
    );
};

export default ContentCard;
