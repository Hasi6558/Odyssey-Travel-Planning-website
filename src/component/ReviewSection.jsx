import React, { useState } from 'react'
import ReviewCard from './cards/ReviewCard'

const ReviewSection = ({ review_count, reviews }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePageClick = (index) => {
        setCurrentIndex(index);
    };

    const reviewsToShow = reviews.slice(currentIndex * 3, (currentIndex + 1) * 3);

    return (
        <>
            <div className='mb-4'>
                <h3 className='text-2xl font-bold '>User reviews</h3>
                <div className='h-0.5 bg-gray-500 '></div>

                <div className='my-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4'>
                    {reviewsToShow.map((review) => (

                        < ReviewCard
                            key={review.id}
                            reviewerName={review.reviewerName}
                            rate={review.rate}
                            ratedAt={review.ratedAt}
                            comment={review.comment}

                        />
                    ))}

                </div>

                <div className='flex justify-center gap-2'>
                    {Array.from({ length: Math.ceil(review_count / 3) }, (_, index) => (


                        <span
                            key={index}
                            onClick={() => handlePageClick(index)}

                            className={`px-4 py-2 w-fit text-lg rounded-full cursor-pointer ${index === currentIndex ? 'bg-black text-white' : 'bg-white text-black'}`}
                        >{index + 1}</span>
                    ))}

                </div>

            </div>


        </>
    )
}

export default ReviewSection