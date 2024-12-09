import React from 'react'
import './SignUp.css'
import Logo from '../../assets/images/logo.png'
import BlueButton1 from '../../component/Buttons/BlueButton1'
import InputFieldSet from '../../component/fieldSets/InputFieldSet'
import SignUpBackground from '../../assets/images/signup_background.png'

function SignUp() {
  return (
    <>
    <div className='login-container'>
    <div className="login-back-image">
        <img src={SignUpBackground} alt="" />
    </div>

    <div className="login-form">
        <img src={Logo} alt="logo" className='logo' />
        <div className='form-container'>
            <form action="" >

            <p className='login-subtitle' align="left">Welcome to Odyssey travel guides</p>
            <p className='login-title' align="left">Sign Up</p>

            
            <InputFieldSet legend="Full name" type="text" iconClass="fa-regular fa-user" placeholder="ex: john chadwick"/>
            <br />
            <InputFieldSet legend="email" type="text" iconClass="fa-regular fa-envelope" placeholder="ex: john@gmail.com"/>
            <br/>
            <InputFieldSet legend="password" type="password" iconClass="fa-regular fa-eye" placeholder="**********"/>
            <br />
            <div className="terms-container">
            <input type="checkbox" />
            <p>I’ve read and agree to <a href="#">Terms & conditions</a></p>
            </div>
            
            <br/>
            <BlueButton1 name='Sign Up' className="blueButton1 sign-in-btn"/>
     
            <div className="signIn-link">  
            </div>
            <div className="terms-container">
            <p>Already have an account ? <span className='sign-up-link'>Sign Up</span></p>
           
            </div>  

    
            </form>
        </div>
        
    </div> 
    
    </div>
     
    </>
  )
}

export default SignUp