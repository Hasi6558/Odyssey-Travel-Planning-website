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
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: ''
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleFavouriteClick = () => {
        setCurrentIndex(0)

    }
    const handlePurchaseClick = () => {
        setCurrentIndex(1)

    }
    const handlePlanClick = () => {
        setCurrentIndex(2)
    }

    const handleEditProfileClick = () => {
        setIsEditProfileOpen(true);
    };

    const handleCloseEditProfile = () => {
        setIsEditProfileOpen(false);
    };

    const handleChangePasswordClick = () => {
        setIsChangePasswordOpen(true);
    };

    const handleCloseChangePassword = () => {
        setIsChangePasswordOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handleUpdateProfile = () => {
        // Add your update profile logic here
        console.log('Profile updated:', formData);
        setIsEditProfileOpen(false);
    };

    const handleChangePassword = () => {
        // Add your change password logic here
        console.log('Password changed:', passwordData);
        setIsChangePasswordOpen(false);
    };

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

                            <div className='flex flex-col me-8'>
                                <button className='flex mb-2' onClick={handleEditProfileClick}>
                                    <div className='border-2 h-fit p-2 font-semibold'> Edit Profile</div>
                                    <div><img src={SettingIcon} alt="setting icon" className='p-2 border-y-2 border-e-2' /></div>
                                </button>
                                <button
                                    onClick={handleChangePasswordClick}
                                    className='flex mt-2'
                                >
                                    <div className='border-2 h-fit p-2 font-semibold'> Change Password</div>
                                    <div><img src={SettingIcon} alt="setting icon" className='p-2 border-y-2 border-e-2' /></div>
                                </button>
                            </div>

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

            {isEditProfileOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </form>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseEditProfile}
                                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleUpdateProfile}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isChangePasswordOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </form>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseChangePassword}
                                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleChangePassword}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className=' '>
                <Footer />
            </div>

        </>
    )
}

export default ProfilePage