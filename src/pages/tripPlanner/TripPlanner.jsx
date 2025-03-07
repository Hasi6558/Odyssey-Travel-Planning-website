import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import DropDownList from './DropDownList'
import TripPlannerBg from '../../assets/images/trip_planner_bg.jpg'
import { useNavigate } from 'react-router'

const TripPlanner = () => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();
  return (

    <div style={{ backgroundImage: `url(${TripPlannerBg})` }} className='bg-cover'>
      <NavBar />
      {(userId == undefined || token == undefined) ? (
        <div className='bg-white p-10 mt-[50px] mb-[50px] rounded-lg'>
          <h1 className='text-center text-4xl'>Please <span className='text-blue-700 cursor-pointer' onClick={() => navigate('/login')}>login</span> to use the trip planner</h1>
        </div>
      ) : (
        <div className=''>
          <DropDownList />
        </div>
      )

      }
      <Footer />
    </div>

  )
}

export default TripPlanner