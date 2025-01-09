import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import SettingIcon from '../../assets/icons/setting_icon.png'
import FavouriteIcon from '../../assets/icons/favourite_icon.png'
import PurchaseIcon from '../../assets/icons/purchase_icon.png'
import MapIcon from '../../assets/icons/map_icon.png'
import FavouriteItems from './FavouriteItems'
import Purchases from './Purchases'
import PlanedTrip from './PlanedTrip'

const ProfilePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const handleFavouriteClick = () => {
        setCurrentIndex(0)

    }
    const handlePurchaseClick = () => {
        setCurrentIndex(1)

    }
    const handlePlanClick = () => {
        setCurrentIndex(2)
    }



    return (
        <>
            <NavBar />

            <div className='h-64 w-full bg-gray-200 relative'>

            </div>
            <div>
                <div className='h-50 w-full bg-white absolute top-60 mx-auto auto-width max-w-[80%] sm:max-w-[90%]'>
                    <div className='flex w-full'>
                        <div className=" aspect-square h-[130px] w-[130px] bg-red-300 m-8 rounded-full">

                        </div>
                        <div className='mt-8 flex justify-between w-full'>
                            <div className=''>
                                <div><h2 className='text-[22px] text-lg font-semibold'>User Name</h2></div>
                                <div><p className='text-gray-500 text-sm'>example@gmail.com</p></div>
                            </div>

                            <button className='flex me-8'>
                                <div className='border-2 h-fit p-2 font-semibold'> Edit Profile</div>
                                <div><img src={SettingIcon} alt="setting icon" className='p-2 border-y-2 border-e-2' /></div>

                            </button>

                        </div>

                    </div>

                </div>
                <div className='pt-36 bg-gray-100  '>

                    <div className='max-w-[1220px] m-auto flex'>
                        <div className='bg-white w-[250px] px-8 py-4'>
                            <ul className=''>
                                <li className='my-4'><button className='flex' onClick={handleFavouriteClick}><img src={FavouriteIcon} className='mr-4 h-5' />Favourites</button></li>
                                <li className='my-4'><button href="#" className='flex' onClick={handlePurchaseClick}><img src={PurchaseIcon} className='mr-4 h-5' />Purchases</button></li>
                                <li className='my-4'><button href="#" className='flex' onClick={handlePlanClick}><img src={MapIcon} className='mr-4 h-5' />Planned trips</button></li>
                            </ul>

                        </div>
                        <div className='w-full'>
                            <div className='px-8'>{currentIndex === 0 ? (<FavouriteItems indexParameter={currentIndex} />) : ("")}</div>
                            <div className='w-full'> {currentIndex === 1 ? (<Purchases />) : ("")}</div>
                            <div> {currentIndex === 2 ? (<PlanedTrip />) : ("")}</div>
                        </div>

                    </div>


                </div>

            </div>

            <div className=' '>
                <Footer />
            </div>

        </>
    )
}

export default ProfilePage