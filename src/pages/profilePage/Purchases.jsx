import React from 'react'
import PurchaseCard from '../../component/cards/PurchaseCard'
import AddReview from '../../component/cards/AddReview'
import { useState } from 'react'

const Purchases = () => {

    
    const [showPopUp, setShowPopUp]= useState(false);

    const handlePopUp =()=>{
        setShowPopUp(!showPopUp);
    }

    
    return (
        <div className='w-full'>
            <div className='w-full p-4'>
                <h1 className='text-2xl mb-4 ml-2'>Hotel Bookings</h1>
                
                <PurchaseCard handlePopUp={handlePopUp}/>
                {showPopUp &&
                <AddReview handlePopUp={handlePopUp} />
                }
                
                <h1 className='text-2xl my-4 ml-2'>Restaurant Reservations</h1>
                
                <PurchaseCard handlePopUp={handlePopUp}/>
                {showPopUp &&
                <AddReview handlePopUp={handlePopUp} />
                }

                <h1 className='text-2xl my-4 ml-2'>Tour Reservations</h1>
                
                <PurchaseCard handlePopUp={handlePopUp}/>
                {showPopUp &&
                <AddReview handlePopUp={handlePopUp} />
                }
                
            </div>
        </div>
    )
}

export default Purchases