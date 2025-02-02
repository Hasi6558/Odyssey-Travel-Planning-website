import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import DropDownList from './DropDownList'
import TripPlannerBg from '../../assets/images/tripPlannerBg.jpg'

const TripPlanner = () => {
  return (
    
    <div style={{backgroundImage:`url(${TripPlannerBg})`}} className='bg-cover'>
      <NavBar />
      <div className=''>
        <DropDownList />
      </div>
      <Footer />
    </div>

  )
}

export default TripPlanner