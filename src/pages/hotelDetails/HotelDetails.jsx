import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService';

const HotelDetails = () => {

    const { id } = useParams();
    const [hotel, setHotel] = useState([]);

    console.log(id);

    useEffect(() => {

        const fetchHotel = async () => {
            try {
                const hotelData = await ApiService.getHotelById(id);
                setHotel(hotelData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchHotel();

    }, [id])


    return (
        <div>{hotel.title}</div>
    )
}

export default HotelDetails