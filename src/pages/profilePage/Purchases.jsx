import React, { useEffect } from 'react'
import PurchaseCard from '../../component/cards/PurchaseCard'
import AddReview from '../../component/cards/AddReview'
import { useState } from 'react'
import ApiService from '../../service/ApiService'


const Purchases = () => {

    
    
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePopUp =()=>{
        setShowPopUp(!showPopUp);
    }
    
    
    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                const orderData = await ApiService.getOrderByUserId("user123");
                setOrder(orderData);
                
            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrder();
    }, []);


    
    return (
        <div className='w-full'>
            <div className='w-full p-4'>
                <h1 className='text-2xl mb-4 ml-2'>Hotel Bookings</h1>
                
                {order.map((order, index) => (
                    <div className='mb-4' key={index}>
                            <PurchaseCard order={order} handlePopUp={handlePopUp}/>
                    </div>
                    
                ))}

               
                
                
                <h1 className='text-2xl my-4 ml-2'>Restaurant Reservations</h1>
                
               

                <h1 className='text-2xl my-4 ml-2'>Tour Reservations</h1>
                
               
            </div>
        </div>
    )
}

export default Purchases