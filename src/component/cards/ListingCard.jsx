import React from 'react'
import LocationIcon from '../../assets/icons/location_logo_2.png'

const ListingCard = () => {
    return (

        <div className='rounded-2xl overflow-hidden flex border max-w-[700px] m-2'>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="listing image" className='h-full w-full object-cover  w-[450px] ' />
            </div>
            <div className='w-[800px] p-8'>
                <h3 className='font-bold text-lg mb-6'>Araliya Red - Lean Luxury - Where you
                    find stunning 360 panoramic view of
                    Nuwara Eliya</h3>
                <div className='flex items-center justify-between overflow-hidden  mb-4'>
                    <div className='flex items-center text'>
                        <span><img src={LocationIcon} alt="" className='h-4' /></span>
                        <span><p className='pe-8'>Nuwara Eliya</p></span>
                        <a href="#"><span className='pe-10 font-semibold'>Show on map</span></a>
                    </div>
                    <div className='flex flex-col items-center pe-4'>
                        <div className='bg-blue-700 text-white p-2'><p>4.5</p></div>
                        <div><p className='text-gray-500'>299 reviews</p></div>
                    </div>
                </div>

                <div className='h-24 overflow-hidden'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt totam sequi pariatur a, iste laboriosam id veniam nisi odio! Porro iure sit maiores dolor in quos quae, harum provident impedit!</p>
                </div>




            </div>

        </div>

    )
}

export default ListingCard