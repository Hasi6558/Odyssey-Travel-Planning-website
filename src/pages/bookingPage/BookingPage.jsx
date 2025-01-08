// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import ContentCard from '../../component/cards/ContentCard';

const BookingPage = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dayCount, setDayCount] = useState(0);
    const [pricePerDay, setPricePerDay] = useState(12);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const difference = (end - start) / (1000 * 60 * 60 * 24);
            setDayCount(difference + 1)
            const totalPrice = dayCount * pricePerDay;
            setTotalCost(totalPrice);
        } else {
            setDayCount(0);
            setTotalCount(0);
        }

    }, [startDate, endDate, pricePerDay]);

    return (
        <>
            <NavBar />
            <div className='max-w-[800px] my-10 m-auto p-10 border rounded-2xl'>

                <div className='text-2xl font-bold mb-2'><h3>Reserve your stay</h3></div>
                <div className='mb-4'>
                    <div className='flex mb-1'><span><h4 className='font-bold font-sm'>Deulux Room -</h4> </span><h4 className='font-bold font-sm'> Subtitle</h4>  </div>
                    <div className='flex mb-2'><p className='text-green-600 font-bold text-sm me-4'>facility1</p><p className='text-green-600 font-bold me-4 text-sm'>facility2</p></div>
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
                    <p className='text-lg'>Total Cost :<span className='text-2xl text-green-800 px-4 font-bold'>{totalCost} $</span></p>
                    <button className='blue text-white bg-blue-700 px-4 py-2 rounded-2xl'>Proceed</button>
                </div>


            </div>

            <Footer />


        </>
    )
}

export default BookingPage