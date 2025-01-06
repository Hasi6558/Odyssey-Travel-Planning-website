import React from 'react'
import Logo from '../../assets/images/logo.png'
import GreyButton1 from '../Buttons/greyButton1.jsx'
import Homelogo from '../../assets/icons/mdi-light_home.png'
import Messagelogo from '../../assets/icons/lets-icons_message-light.png'
import Telephonelogo from '../../assets/icons/mdi_telephone.png'
import Faxlogo from '../../assets/icons/fluent-mdl2_fax.png'
import fbLogo from '../../assets/icons/SocialMedial/mingcute_facebook-line.png'
import twitterLogo from '../../assets/icons/SocialMedial/mdi_twitter.png'
import ytLogo from '../../assets/icons/SocialMedial/mdi_youtube.png'
import instaLogo from '../../assets/icons/SocialMedial/lets-icons_insta.png'

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='flex text-white justify-around pt-4'>
                <div className='p-8 flex'>
                    <div  >
                        <img src={Logo} alt="logo" />
                        <div className='flex items-center pt-8'>
                            <GreyButton1 label='Sign in' />
                            <p className='text-white p-0 mx-4' >or</p>
                            <GreyButton1 label='Register' />

                        </div>


                    </div>
                </div>
                <div className='p-8'>
                    <p className='font-bold pb-4'>USEFUL LINKS</p>
                    <a href="#" className='text-stone-400'><p className='pb-2'>About us</p></a>
                    <a href="#" className='text-stone-400'><p className='pb-2'>Contact us</p></a>
                    <a href="#" className='text-stone-400'><p className='pb-2'>Privacy policy</p></a>
                    <a href="#" className='text-stone-400'><p>Terms and conditions</p></a>

                </div>
                <div className='p-8'>
                    <p className='font-bold pb-4'>CONTACT</p>
                    <div className='flex items-center'>
                        <img src={Homelogo} alt="home logo" className='pe-2 w-6' />
                        <a href="#" className='text-stone-400'><p className='pb-2'>187/2, 3rd cross street, Colombo</p></a>
                    </div>

                    <div className='flex items-center'>
                        <img src={Messagelogo} alt="message logo" className='pe-2 w-6' />
                        <a href="#" className='text-stone-400'><p className='pb-2'>info@odyssey@gmail.com</p></a>
                    </div>

                    <div className='flex items-center'>
                        <img src={Telephonelogo} alt="telephone logo" className='pe-2 w-6' />
                        <a href="#" className='text-stone-400'><p className='pb-2'>+94 116225522</p></a>
                    </div>

                    <div className='flex items-center'>
                        <img src={Faxlogo} alt="fax logo" className='pe-2 w-6' />
                        <a href="#" className='text-stone-400'><p className='pb-2'>+94 116225523</p></a>
                    </div>

                </div>
            </div>
            <div className='border-t-2  border-stone-400 mt-8 mx-8'>

            </div>
            <div className='flex items-center justify-between px-8'>
                <p className='text-white my-6'>© 2024 Your Company, Inc. All rights reserved.</p>
                <div className='flex'>
                    <a href="#" className='mx-2'><img src={fbLogo} alt="" /></a>
                    <a href="#" className='mx-2'><img src={twitterLogo} alt="" /></a>
                    <a href="#" className='mx-2'><img src={instaLogo} alt="" /></a>
                    <a href="#" className='mx-2'><img src={ytLogo} alt="" /></a>

                </div>
            </div>


        </div>


    )
}

export default Footer