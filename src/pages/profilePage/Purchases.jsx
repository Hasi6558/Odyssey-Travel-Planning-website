import React, { useEffect } from 'react'
import PurchaseCard from '../../component/cards/PurchaseCard'
import { useState } from 'react'
import ApiService from '../../service/ApiService'
import ReservationCard from '../../component/cards/ReservationCard'


const Purchases = () => {


    
    const userId = localStorage.getItem('userId');
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [reservations, setReservations] = useState([]);

    const handlePopUp =()=>{
        setShowPopUp(!showPopUp);
    }   
    
    
    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                const orderData = await ApiService.getOrderByUserId(userId);
                const reservationData = await ApiService.getReservationByUserId(userId);
                
                setOrder(orderData);
                setReservations(reservationData);
                
            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrder();
    }, []);


    
    return (
        <div className='w-full ml-10'>
            <div className='w-full p-4'>
                <h1 className='text-2xl mb-4 ml-2 font-bold'>Hotel Bookings</h1>
                
                {order.map((order, index) => (
                    <div className='mb-4' key={index}>
                            <PurchaseCard order={order} handlePopUp={handlePopUp}/>
                    </div>
                    
                ))}
                
                <h1 className='text-2xl my-4 ml-2 font-bold'>Restaurant Reservations</h1>
                {reservations.map((reservation, index) => (
                    <div className='mb-4' key={index}>
                            <ReservationCard order={reservation} handlePopUp={handlePopUp}/>
                    </div>
                    
                ))}
                     
{/* 
                <h1 className='text-2xl my-4 ml-2'>Tour Reservations</h1> */}
                
               
            </div>
        </div>
    )
}

export default Purchases