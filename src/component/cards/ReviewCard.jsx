import React from 'react'
import RatingBar from '../bars/RatingBar'

const ReviewCard = ({ reviewerName, rate, ratedAt, comment }) => {



    return (
        <div className='p-4 border rounded-2xl border-2 w-80 cla'>

            <div className='flex justify-between' >
                <div className='flex items-center mb-1'>
                    <div className=''><h3 className='font-bold text-sm me-4 '>{reviewerName}</h3></div>
                    <div><RatingBar totalDots={5} rating={rate} /></div>
                </div>
                <div className='text-xs'>
                    {ratedAt}
                </div>
            </div>
            <div>
                {comment}
            </div>

        </div>
    )
}

export default ReviewCard