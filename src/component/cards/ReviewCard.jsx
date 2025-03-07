import React from 'react'
import RatingBar from '../bars/RatingBar'

const ReviewCard = ({ reviewerName, rate, ratedAt, comment }) => {



    return (
        <div className='p-4 border rounded-2xl border-2 w-80 cla'>

            <div className='flex justify-between' >
                <div className='flex items-center mb-1'>
                    
                    <div><RatingBar totalDots={5} rating={rate} /></div>
                </div>
                <div className='text-xs'>
                    {ratedAt}
                </div>
            </div>
            <div>
                {comment}
            </div>
            <div className=''><h3 className='font-bold text-sm me-4 mt-2 italic'>- {reviewerName}</h3></div>

        </div>
    )
}

export default ReviewCard