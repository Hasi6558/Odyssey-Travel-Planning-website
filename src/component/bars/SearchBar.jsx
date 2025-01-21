import React, { useState } from 'react';
import redLocationLogo from '../../assets/icons/mdi_location_red.png';
import Searchlogo from '../../assets/icons/material-symbols_search.png';

const SearchBar = ({ title, subtitleLine1, subtitleLine2, hintText, setSearchedText, searchBackgroundImg }) => {
    const [currentText, setCurrentText] = useState("");

    const handleInputChange = (event) => {
        setCurrentText(event.target.value);
    };

    const handleSearch = () => {
        setSearchedText(currentText);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div
            className="w-screen h-screen flex flex-col items-center relative bg-cover bg-center"
            style={{ backgroundImage: `url(${searchBackgroundImg})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Title */}
            <div className="relative text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mt-20 md:mt-40 font-semibold">
                    {title}
                </h1>
            </div>

            {/* Subtitle */}
            <div className="relative">
                <p className="text-white text-center my-4 px-4 md:px-8">
                    {subtitleLine1}
                    <br />
                    {subtitleLine2}
                </p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-11/12 sm:w-3/4 md:w-3/5 lg:w-2/5 border border-gray-400 h-14 sm:h-16 rounded-full bg-white p-2 relative mt-8 md:mt-10 justify-between shadow-lg">
                {/* Input Field */}
                <div className="flex flex-grow items-center">
                    <span className="px-2">
                        <img src={redLocationLogo} alt="Location" className="w-6 h-6" />
                    </span>
                    <input
                        type="text"
                        placeholder={hintText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="flex-grow outline-none text-gray-700 px-2 text-sm sm:text-base"
                    />
                </div>

                {/* Search Button */}
                <div className="flex items-center px-2">
                    <button onClick={handleSearch}>
                        <img
                            src={Searchlogo}
                            alt="Search"
                            className="bg-blue-400 rounded-full p-2 w-8 h-8 sm:w-10 sm:h-10 hover:bg-blue-500 transition"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
