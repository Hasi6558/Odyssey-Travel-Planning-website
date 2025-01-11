import React from 'react'

const PurchaseCard = () => {
    return (
        <div className='border rounded-xl p-4'>
            <div className='flex '>
                <div className='pe-4'>Order Id: <span>55545565425456456445</span></div>
                <div>Date : </div>
            </div>

            <div><h1 className='text-xl font-semibold '>Title</h1></div>
            <div className='flex justify-between mt-2'>
                <div><p>Amount : </p></div>
                <div><p><a href="">Show Item</a></p></div>
            </div>
        </div>
    )
}

export default PurchaseCard