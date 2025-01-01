import React, { useState } from "react";

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-3xl mx-20">
            {/* Image Container */}
            <div className="relative overflow-hidden h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transform transition-transform duration-700 ${index === currentIndex
                            ? "translate-x-0"
                            : index > currentIndex
                                ? "translate-x-full"
                                : "-translate-x-full"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 shadow-md"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 shadow-md"
            >
                ❯
            </button>


            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
