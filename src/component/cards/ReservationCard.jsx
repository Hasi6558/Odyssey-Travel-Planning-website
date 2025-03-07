import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddReview from './AddReview';
import ApiService from '../../service/ApiService';


const ReservationCard = ({handlePopUp, order}) => {

    

    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();
    const [restaurant,setRestaurant] = useState({});
   
    const [loading, setLoading] = useState(false);

    const handleShowItem = () => {
        navigate(`/hotel-details/${order.itemId}`);
    };

    useEffect(() => {

        const fetchRestaurant = async () => {
            setLoading(true);
            try {
                const restaurantData = await ApiService.getRestaurantById(order.itemId);
                
                setRestaurant(restaurantData);

            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurant();
        

    }, [order]);


    

    return (
        <div className='border rounded-xl px-8 py-4 bg-white mr-10'>
            <div className='flex flex-col items-end '>
                <div className=''>Reservation Id: <span>{order.id}</span></div>
                <div>Date : {order.bookingDate}</div>
            </div>
            <hr />
            <div className='flex justify-between'>
                <div className='flex flex-col justify-between'>
                    <div className='mt-4'><h1 className='text-2xl font-semibold '>{restaurant.title}</h1></div>
                    <div className='text-xl mt-1 font-semibold mb-2'><p>People Count :{order.peopleCount}  </p></div>
                </div>
                <div className='flex flex-col justify-center items-center m-2 my-4'>
                    <button className='text-white font-semibold p-2 bg-blue-700 rounded-lg mb-2' onClick={() => setShowPopUp(true)}>+ Add a review</button>
                    <div className='mt-1 font-semibold text-white bg-black p-2 rounded-lg w-full text-center' onClick={handleShowItem}><p><a href="#">Show Item</a></p></div>
                </div>
            </div>
            {showPopUp && (
                <AddReview handlePopUp={() => setShowPopUp(false)} reviewdItemId={order.itemId} />
            )}
        </div>
    );
}

export default ReservationCard