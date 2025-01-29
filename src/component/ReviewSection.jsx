import React, { useState } from 'react'
import ReviewCard from './cards/ReviewCard'

const ReviewSection = ({ review_count, reviews }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage =3;
    const maxPageNumbersToShow =5;
    const totalPages =Math.ceil(review_count/itemsPerPage);

    const handlePageClick = (index) => {
        setCurrentIndex(index);
    };

    const handleNext =()=>{
        if(currentIndex<totalPages-1){
            setCurrentIndex(currentIndex+1);
        }
    }

    const handlePrev =()=>{
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1);
        }
    }
    let startPage = Math.max(0, currentIndex - Math.floor(maxPageNumbersToShow / 2)); 
    let endPage = startPage + maxPageNumbersToShow;
    
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(0, endPage - maxPageNumbersToShow);
    }



      const reviewsToShow = reviews.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

    return (
        <>
            <div className='mb-4'>
                <h3 className='text-2xl font-bold '>User reviews</h3>
                <div className='h-0.5 bg-gray-500 '></div>

                <div className='my-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4'>
                    {reviews.length > 0 ? (reviewsToShow.map((review) => (

                        < ReviewCard
                            key={review.id}
                            reviewerName={review.reviewerName}
                            rate={review.rate}
                            ratedAt={review.ratedAt}
                            comment={review.comment}

                        />
                    ))) : (<p>No reviews available</p>)

                    }

                </div>

                <div className='flex justify-center gap-2'>

                <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                    className={`px-4 py-2 text-lg rounded-full ${currentIndex === 0 ? 'bg-gray-300 text-gray-500' : 'bg-black text-white cursor-pointer'}`}
                >
                    Prev
                </button>
                {Array.from({ length: endPage - startPage }, (_, index) => startPage + index).map((page) => (
            <span
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 w-fit text-lg rounded-full cursor-pointer ${page === currentIndex ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
         {page + 1}
        </span>
))}
                    <button 
                    onClick={handleNext} 
                    disabled={currentIndex === totalPages - 1}
                    className={`px-4 py-2 text-lg rounded-full ${currentIndex === totalPages - 1 ? 'bg-gray-300 text-gray-500' : 'bg-black text-white cursor-pointer'}`}
                >
                    Next
                </button>

                </div>

            </div>


        </>
    )
}

export default ReviewSection