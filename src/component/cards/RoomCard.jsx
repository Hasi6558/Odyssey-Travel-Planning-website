import React from 'react'
import { useNavigate } from 'react-router'

const RoomCard = ({ title, subTitle, features, price, discountedPrice, avalRooms, roomId }) => {


    const navigate = useNavigate();


    return (
        <div className='w-72 border rounded-[35px] border-2 border-gray-400 mb-10'>
            <div className='w-full h-32 overflow-hidden  rounded-[32px] rounded-b-none'>
                <img src="https://img.freepik.com/premium-photo/blue-screen-shiny-glowing-effects-abstract-background-design_851755-168839.jpg" alt="" />
            </div>
            <div className='p-4'>
                <div>
                    <h3 className='font-bold text-lg'>{title}</h3>
                </div>

                <div className="w-64">
                    <h3 className="font-bold text-sm my-2 ">{subTitle}</h3>
                    <ul className="space-y-0.5 text-sm h-[120px] overflow-y-auto">

                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className='h-2 w-2 bg-black mr-2 rounded-full'></span>
                                {/* <span className="text-xl font-bold mr-2">🅿️</span> */}
                                <span>{feature}</span>
                            </li>
                        ))}
                      
                    </ul>
                </div>
                <div >
                    <div className='flex items-baseline justify-center'>
                        <p className='font-bold pe-2'>{discountedPrice}$</p>
                        <p className='text-xs'><del> {price} $</del></p>
                    </div>
                    <div className='flex justify-center mb-2'>
                        <p className='text-xs'>includes taxes & fees</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-lg text-white font-bold bg-blue-700 px-6 py-1 rounded-full' onClick={() => navigate(`/booking-page/${roomId}`)}>Reserve</button>
                    </div>
                    <div className='flex justify-center text-xs text-red-500'>
                        {avalRooms < 4 ? `only ${avalRooms} rooms left` : ``}

                    </div>
                </div>

            </div>


        </div>
    )
}

export default RoomCard