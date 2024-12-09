import React from 'react'
import Logo from '../../assets/images/logo.png'
import LoginBackground from '../../assets/images/background_login.png'
import './LogIn.css'
import BlueButton1 from '../../component/Buttons/BlueButton1'
import InputFieldSet from '../../component/fieldSets/InputFieldSet'
import GoogleLogo from '../../assets/images/googleLogo.png'
import FbLogo from '../../assets/images/fbLogo.png'
import AppleLogo from '../../assets/images/appleLogo.png'

import SocialMediaButton from '../../component/Buttons/SocialMediaButton'

function LogIn() {
  return (
    <>
    <div className='login-container'>
    <div className="login-form">
        <img src={Logo} alt="logo" className='logo' />
        <div className='form-container'>
            <form action="" >

            <p className='login-subtitle' align="left">Start your journey</p>
            <p className='login-title' align="left">Sign in to Odyssey</p>

            
            <InputFieldSet legend="Email" type="text" iconClass="fa-regular fa-envelope" placeholder="example@gmail.com"/>
            <br />
            <InputFieldSet legend="password" type="password" iconClass="fa-regular fa-eye" placeholder="**********"/>
            <br />
            <BlueButton1 name='Sign in' className="blueButton1 sign-in-btn"/>
            <br /><br />
            <fieldset className='social-media-fieldset'>
                <legend align= "center">or sign in with</legend><br />
                <div className='social-media-sign-in'>
                    <SocialMediaButton src={GoogleLogo}/>
                    <SocialMediaButton src={FbLogo}/>
                    <SocialMediaButton src={AppleLogo}/>
                </div>
            </fieldset>
            

            </form>
        </div>
        <p>Have not account? <span className='sign-up-link'>Sign Up</span></p>
    </div>
    <div className="login-back-image">
        <img src={LoginBackground} alt="" />
    </div>
    </div>
     
    </>
   
  )
}

export default LogIn