import React, { useState } from 'react'
import redLocationLogo from '../../assets/icons/mdi_location_red.png'
import Searchlogo from '../../assets/icons/material-symbols_search.png'

const SearchBar = ({ title, subtitleLine1, subtitleLine2, hintText, setSearchedText, searchBackgroundImg }) => {

    const [currentText, setCurrentText] = useState("");

    const handleInputChange = (event) => {
        setCurrentText(event.target.value);
    }

    const handleSearch = () => {
        setSearchedText(currentText);

    }
    const handleKeyDown = () => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className='w-screen h-screen  flex flex-col items-center relative bg-cover bg-center' style={{ backgroundImage: `url(${searchBackgroundImg})` }}>

            <div className='absolute inset-0 bg-black opacity-50'>

            </div>

            <div className='relative'>
                <h1 className='text-4xl text-white mt-40 font-semibold'>{title}</h1>

            </div>
            <div className='relative'>
                <p className='text-white text-center my-4 pt-1' >{subtitleLine1}<br /> {subtitleLine2}</p>
            </div>
            <div className='flex items-center w-3/6 border-8 h-16 border-gray-400 rounded-full bg-white p-2 relative mt-10'>
                <span className='px-2'>
                    <img src={redLocationLogo} alt="" />
                </span>
                <input type="text" placeholder={hintText} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <div className='flex items-center px-2'>
                    <button><img src={Searchlogo} alt="" className='bg-blue-400 rounded-full p-2' onClick={handleSearch} /></button>
                </div>
            </div >

        </div >
    )
}

export default SearchBar