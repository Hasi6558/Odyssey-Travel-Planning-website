import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService'
import CheckIcon from '../../assets/icons/bi_check.png'

const ToursBooking = () => {
    const {id} = useParams();

 
    const [tourPackage, setTourPackage] = useState({});
    useEffect(() => {
        const fetchTourPackage = async () => {
            try {
                console.log(id, "tour id");
                const tourPackageData = await ApiService.getTourPackageByTourId(id);
                console.log(tourPackageData, "tour package data");
                setTourPackage(tourPackageData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchTourPackage();
    }, [id]);


    
    
    return (
        <>
            <NavBar />
            <div className='max-w-[800px] my-10 m-auto p-10 border rounded-2xl'>

                <div className='text-2xl font-bold mb-2'><h3>Reserve your stay</h3></div>
                <div className='mb-4'>
                    <div className='flex mb-1'><span><h4 className='font-bold font-sm'>
                        {tourPackage[0]?.title}</h4> </span>  </div>
                    
                </div>
                <div>
                    <form className=''>
                        <div className='flex justify-between'>
                            <div className='mr-4'>
                                <label className='mr-5'>First Name</ label>
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
                            <textarea cols="1" rows="3" className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md  outline-none" />
                        </div>
                        <div className='flex justify-between mt-6'>
                    
                        <button className='blue text-white bg-blue-700 px-4 py-2 rounded-2xl'>Proceed</button>
                        <div className='text-green-700 font-bold text-2xl'>Total : {tourPackage[0]?.price} $</div>
                        
                        </div>
                        

                    </form>
                </div>

            </div>
            <div>Hi</div>
            
          

            {/* <PayHerePayment /> */}

            <Footer />


        </>
    )
}

export default ToursBooking