import React from 'react';

const RatingBar = ({ totalDots, rating }) => {
    return (
        <div className="flex items-center gap-1 me-3">
            {Array.from({ length: totalDots }, (_, index) => (
                <span
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${index < rating ? 'bg-green-600' : 'bg-gray-300'}`}
                />
            ))}
        </div>
    );
};

export default RatingBar;
