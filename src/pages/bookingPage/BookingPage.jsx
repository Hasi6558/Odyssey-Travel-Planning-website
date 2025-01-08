// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import ContentCard from '../../component/cards/ContentCard';
import { useParams } from 'react-router';
import ApiService from '../../service/ApiService';
import LoadingScreen from '../../component/LoadingScreen';
import CheckIcon from '../../assets/icons/bi_check.png'
import PayHerePayment from '../../payment/payHerePayment';
const BookingPage = () => {

    const { id } = useParams();
    const [hotelRoom, setHotelRoom] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dayCount, setDayCount] = useState(0);
    const [pricePerDay, setPricePerDay] = useState(12);
    const [totalCost, setTotalCost] = useState(0);
    const [loading, setLoading] = useState(0);


    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (end >= start) {
                const difference = (end - start) / (1000 * 60 * 60 * 24);
                const calculatedDays = difference + 1;
                setDayCount(calculatedDays);
                setTotalCost(calculatedDays * pricePerDay);
            } else {
                setDayCount(0)
                setTotalCost(0)
            }
        } else {
            setDayCount(0);
            setTotalCost(0);
        }


    }, [startDate, endDate, pricePerDay]);

    useEffect(() => {

        const fetchHotelRoom = async () => {
            setLoading(true);
            try {

                const response = await ApiService.getHotelRoomById(id);
                setHotelRoom(response);
                setPricePerDay(response.price);

            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false)
            }
        };
        fetchHotelRoom();

    }, [id])
    console.log(hotelRoom)
    console.log(pricePerDay)


    return (
        <>
            <NavBar />
            <div className='max-w-[800px] my-10 m-auto p-10 border rounded-2xl'>

                <div className='text-2xl font-bold mb-2'><h3>Reserve your stay</h3></div>
                <div className='mb-4'>
                    <div className='flex mb-1'><span><h4 className='font-bold font-sm'>{hotelRoom.title} - </h4> </span><h4 className='font-bold font-sm pl-2'>  {hotelRoom.subtitle}</h4>  </div>
                    <div className='flex mb-2'>
                        {hotelRoom.facilities && hotelRoom.facilities.length > 0 ? (
                            hotelRoom.facilities.map((facility, index) => (
                                <p key={index} className='text-green-600 font-semibold text-sm mx-1 flex' ><img src={CheckIcon} alt="" className='mr-1 ' />{facility}</p>
                            ))
                        ) : (
                            <p>No facilities available.</p>
                        )}
                    </div>
                </div>
                <div>
                    <form className=''>
                        <div className='flex justify-between'>
                            <div className='mr-4'>
                                <label>First Name</ label>
                                <input type="text" placeholder='(e.g. john)' className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md" />
                            </div>
                            <div>
                                <label>Last Name</ label>
                                <input type="text" placeholder='(e.g. Smith)' className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md " />
                            </div>
                        </div>
                        <div>
                            <label>Email address</label>
                            <input type='email' placeholder='Email for confirmation' className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md " />
                        </div>
                        <div>
                            <label>Mobile Phone</label>
                            <input type='text' placeholder='eg:0765942235' className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md " />
                        </div>

                        <div className='flex flex-col'>
                            <label>Special notes</label>
                            <textarea cols="" rows="3" className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md  outline-none" />
                        </div>

                    </form>
                </div>

            </div>
            <div className='border border-solid border-gray-100 max-w-[800px] my-10 m-auto rounded-2xl p-10'>
                <span className='text-2xl font-bold' >How many days are you willing to stay</span>
                <div className='flex items-center mt-5'>
                    <span className='font-bold me-4 text-lg'>Start From</span>
                    <input type="date" className='p-2 rounded-xl border-solid border-gray-100 w-64 me-4' onChange={(e) => setStartDate(e.target.value)} />
                    <span className='font-bold me-4 taxt-lg'>To</span>
                    <input type="date" className='p-2 rounded-xl border-solid border-gray-100 w-64 me-4' onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div className='flex justify-between mt-6'>
                    <p className='text-lg flex'>Total Cost :<span className='text-2xl text-green-800 px-4 font-bold'>{totalCost} $ </span><div>{dayCount > 0 ? (<span>For {dayCount} days</span>) : ("")}</div> </p>
                    <button className='blue text-white bg-blue-700 px-4 py-2 rounded-2xl'>Proceed</button>
                </div>


            </div>

            {/* <PayHerePayment /> */}

            <Footer />


        </>
    )
}

export default BookingPage