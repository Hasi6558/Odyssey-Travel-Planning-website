import React from 'react'
import LogoGrey from '../../assets/images/logo_grey.png'
import Logo from '../../assets/images/logo.png'
import GreyButton1 from '../Buttons/greyButton1'
const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='p-8 '>
                <div  >
                    <img src={Logo} alt="logo" />
                    <div className='flex items-center pt-4'>
                        <GreyButton1 label='Sign in' />
                        <p className='text-white p-0 me-2' >or</p>
                        <GreyButton1 label='Register' />
                    </div>


                </div>
            </div>
        </div>


    )
}

export default Footer