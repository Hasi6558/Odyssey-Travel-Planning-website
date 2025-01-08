import React from 'react'
import DemoImg from '../../assets/images/background_login.png'
import { useNavigate } from 'react-router'
const RoomCard = ({ title, subTitle, features, price, discountedPrice, avalRooms, roomId }) => {


    const navigate = useNavigate();

    return (
        <div className='w-72 border rounded-[35px] border-2 border-gray-400 mb-10'>
            <div className='w-full h-44 overflow-hidden  rounded-[32px] rounded-b-none'>
                <img src={DemoImg} alt="" />
            </div>
            <div className='p-4'>
                <div>
                    <h3 className='font-bold text-lg'>{title}</h3>
                </div>

                <div className="w-64">
                    <h3 className="font-bold text-sm my-2 ">{subTitle}</h3>
                    <ul className="space-y-0.5 text-sm">
                        <li className="flex items-center">
                            <span className="text-green-600 text-xl font-bold mr-2">🅿️</span>
                            <span>{features[0]}</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl font-bold mr-2">📶</span>
                            {features[1]}
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl font-bold mr-2">📐</span>
                            {features[2]}
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl font-bold mr-2">👥</span>
                            {features[3]}
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl font-bold mr-2 mb-1">🛏️</span>
                            {features[4]}
                        </li>
                    </ul>
                </div>
                <div >
                    <div className='flex items-baseline justify-center'>
                        <p className='font-bold pe-2'>{price}</p>
                        <p className='text-xs'><del>{discountedPrice}</del></p>
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