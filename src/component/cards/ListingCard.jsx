import React from 'react'
import LocationIcon from '../../assets/icons/location_logo_2.png'

const ListingCard = ({ title, location_city, location_map_url, rating, review_count, description, imgUrl, destination_link }) => {
    
    console.log(imgUrl)
    return (

        <div className='rounded-2xl overflow-hidden flex border max-w-[800px] h-[340px]  m-2'>
            <div className='w-96'>
                <img src={imgUrl} alt="listing image" className='h-full w-full object-cover w-[350px] ' />
            </div>
            <div className='w-[700px] p-8'>
                <h3 className='font-bold text-lg mb-6'>{title}</h3>
                <div className='flex items-center justify-between overflow-hidden  mb-4'>
                    <div className='flex items-center text'>
                        <span><img src={LocationIcon} alt="" className='h-4' /></span>
                        <span><p className='pe-8 ps-1 '>{location_city}</p></span>
                        <a href={location_map_url}><span className='pe-10 font-semibold'>Show on map</span></a>
                    </div>
                    <div className='flex flex-col items-center pe-4'>
                        <div className='bg-blue-700 text-white p-2'><p>{rating}</p></div>
                        <div><p className='text-gray-500'>{review_count} Reviews</p></div>
                    </div>
                </div>

                <div className='h-24 overflow-hidden'>
                    <p>{description}</p>
                </div>
                <a href={destination_link}><div className='w-full flex justify-end pe-4 text-gray-500'>See more</div></a>





            </div>

        </div>

    )
}

export default ListingCard