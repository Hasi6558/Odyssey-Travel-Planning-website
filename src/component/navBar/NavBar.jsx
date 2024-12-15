import React from 'react'
import './NavBar.css'
import Logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router'


function NavBar() {

  const navigate = useNavigate();

  return (
    <>
      <div className="nav-container">
        <div className="nav-bar">
          <img src={Logo} alt="" />
          < div className="nav-list">

            <ul>
              <li onClick={() => { navigate("/") }}>Home</li>
              <li onClick={() => { navigate("/hotel") }}>Hotel</li>
              <li onClick={() => { navigate("/restaurant") }}>Restaurant</li>
              <li onClick={() => { navigate("/tours") }}>Tours</li>
              <li onClick={() => { navigate("/tripPlanner") }}>Plan Trip</li>
              <li onClick={() => { navigate("/blog") }}>Blog</li>

            </ul>


          </div>
          <div className="profile">
            <div className="profile-pic"></div>
            <div className="user-name">Hi, User</div>

          </div>
        </div>

      </div>


    </>
  )
}

export default NavBar