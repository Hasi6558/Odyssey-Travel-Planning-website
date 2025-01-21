import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import DropDownList from './DropDownList'

const TripPlanner = () => {
  return (
    <>
      <NavBar />
      <div>
        <DropDownList />
      </div>
      <Footer />
    </>

  )
}

export default TripPlanner