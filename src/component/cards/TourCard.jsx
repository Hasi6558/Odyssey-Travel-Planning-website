import React from 'react'
import DemoImg from '../../assets/images/background_login.png'
import { useNavigate } from 'react-router-dom'

const TourCard = ({title, dateRange, description, price, discountedPrice,tourId }) => {

    console.log(tourId,"tour idddddddddddddd");
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
                      <h3 className="font-bold text-sm my-2 ">{dateRange}</h3>
                      <div>
                        <p className='text-sm font-normal'>{description}</p>
                        
                      </div>
                  </div>
                  <div >
                      <div className='flex items-baseline justify-center'>
                          <p className='font-bold pe-2'>{price} $</p>
                          <p className='text-xs'><del>{discountedPrice} $</del></p>
                      </div>
                      <div className='flex justify-center mb-2'>
                          <p className='text-xs'>includes taxes & fees</p>
                      </div>
                      <div className='flex justify-center'>
                          <button className='text-lg text-white font-bold bg-blue-700 px-6 py-1 rounded-full' 
                          onClick={() => navigate(`/tour-booking/${tourId}`)}
                          >Reserve</button>
                      </div>
                      
                  </div>
  
              </div>
  
  
          </div>
      )
    }

export default TourCard