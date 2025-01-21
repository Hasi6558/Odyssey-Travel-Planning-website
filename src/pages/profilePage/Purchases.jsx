import React from 'react'
import PurchaseCard from '../../component/cards/PurchaseCard'

const Purchases = () => {
    return (
        <div className='w-full'>
            <div className='w-full p-4'>
                <h1 className='text-2xl mb-4'>Purchases</h1>
                <PurchaseCard />
            </div>
        </div>
    )
}

export default Purchases