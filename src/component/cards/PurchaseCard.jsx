import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddReview from '../../component/cards/AddReview'; 
import ApiService from '../../service/ApiService';

const PurchaseCard = ({ handlePopUp, order }) => {
    const userId = localStorage.getItem('userId');
    const [hotel, setHotel] = useState({});
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();

    const handleShowItem = () => {
        navigate(`/hotel-details/${order.hotelId}`);
    };
    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const hotelData = await ApiService.getHotelById(order.hotelId);
                setHotel(hotelData);
                console.log(hotelData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchHotel();
    }, []);

    return (
        <div className='border rounded-xl px-8 py-4 bg-white'>
            <div className='flex flex-col items-end '>
                <div className=''>Order Id: <span>{order.id}</span></div>
                <div>Date : {order.startDate}</div>
            </div>
            <hr />
            <div className='flex justify-between'>
                <div className='flex flex-col justify-between'>
                    <div className='mt-4'><h1 className='text-2xl font-semibold '>{hotel.title} - {order.roomTitle}</h1></div>
                    <div className='text-xl mt-1 font-semibold mb-2'><p>Total :{order.totalCost} $ </p></div>
                </div>
                <div className='flex flex-col justify-center items-center m-2 my-4'>
                    <button className='text-white font-semibold p-2 bg-blue-700 rounded-lg mb-2' onClick={() => setShowPopUp(true)}>+ Add a review</button>
                    <div className='mt-1 font-semibold text-white bg-black p-2 rounded-lg w-full text-center' onClick={handleShowItem}><p><a href="#">Show Item</a></p></div>
                </div>
            </div>
            {showPopUp && (
                <AddReview handlePopUp={() => setShowPopUp(false)} reviewdItemId={order.hotelId} />
            )}
        </div>
    );
};

export default PurchaseCard;