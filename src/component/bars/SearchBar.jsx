import React from 'react'
import redLocationLogo from '../../assets/icons/mdi_location_red.png'
import Searchlogo from '../../assets/icons/material-symbols_search.png'

const SearchBar = () => {
    return (
        <div className='w-screen h-screen  flex justify-center relative bg-cover bg-center' style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')" }}>
            <style></style>
            <div className='flex items-center w-2/3 border-8 h-14 border-gray-400 rounded-3xl bg-white p-2'>
                <span>
                    <img src={redLocationLogo} alt="" />
                </span>
                <input type="text" />
                <div className='flex items-center'>
                    <button><img src={Searchlogo} alt="" className='bg-blue-400 rounded-full p-2' /></button>
                </div>
            </div >

        </div >
    )
}

export default SearchBar