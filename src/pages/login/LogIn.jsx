import React from 'react'
import Logo from '../../assets/images/logo.png'
import LoginBackground from '../../assets/images/background_login.png'
import './Login.css'

function LogIn() {
  return (
    <>
    <div className='login-container'>
    <div className="login-form">
        <img src={Logo} alt="logo" className='logo' />
        <div className='form-container'>
            <form action="">

            <p>Start your journey</p>
            <p>Sign in to Odyssey</p>

            <fieldset className='input-fieldset'>
            <legend>Username</legend>
                <div className="input-container">
                <input type="text" placeholder='example@gmail.com'/>
                <i class="fa-regular fa-envelope"></i>
                </div>
            </fieldset>


            <fieldset className='input-fieldset'>
            <legend>Username</legend>
                <div className="input-container">
                <input type="password" placeholder='************'/>
                <i class="fa-regular fa-eye"></i>
                </div>
            </fieldset>

            <button className='sign-in-btn'>
                Sign In
            </button>

            <fieldset className='social-media-fieldset'>
                <legend align= "center">or sign in with</legend>
                <div className='social-media-sign-in'>
                    <button>
                    <i class="fa-brands fa-google"></i>
                    </button>
                </div>
            </fieldset>
            

            </form>
           


        </div>
    </div>
    <div className="login-back-image">
        <img src={LoginBackground} alt="login background"/>
    </div>
    </div>
     
    </>
   
  )
}

export default LogIn