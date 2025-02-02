import React from 'react'

const PurchaseCard = ({handlePopUp}) => {
    return (
        <div className='border rounded-xl px-8 py-4 bg-white'>
            <div className='flex flex-col items-end '>
                <div className=''>Order Id: <span>55545565425456456445</span></div>
                <div>Date : 2025/01/01 00:00:00 </div>
            </div>
            <hr />
            <div className='flex justify-between'>
            <div className='flex flex-col justify-between'>
                <div className='mt-4'><h1 className='text-2xl font-semibold '>Unwind in Unmatched Comfort at Ocean Pearl</h1></div>
                <div className='text-xl mt-1 font-semibold mb-2'><p>Total :240 $ </p></div>
            </div>
            <div className='flex flex-col justify-center items-center m-2 my-4'>
                <button className='text-white font-semibold p-2 bg-blue-700 rounded-lg mb-2' onClick={handlePopUp}>+ Add a review</button>
                 <div className='mt-1 font-semibold text-white bg-black p-2 rounded-lg w-full text-center'><p><a href="">Show Item </a></p></div>
            </div>
            </div>
           

           
        </div>
    )
}

export default PurchaseCard