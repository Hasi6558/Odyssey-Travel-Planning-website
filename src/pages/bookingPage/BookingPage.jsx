// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'

const BookingPage = () => {
  return (
    <>
    <NavBar/>
    <div className='max-w-[800px] my-10 m-auto p-10 border rounded-2xl'>
        
        <div className='text-2xl font-bold mb-2'><h3>Reserve your stay</h3></div>
        <div className=''>
            <div className='flex mb-1'><span><h4 className='font-bold font-sm'>Deulux Room -</h4> </span><h4 className='font-bold font-sm'> Subtitle</h4>  </div>
            <div className='flex mb-2'><p className='text-green-600 font-bold text-sm me-4'>facility1</p><p className='text-green-600 font-bold me-4 text-sm'>facility2</p></div>
        </div>
        <div>
            <form className=''>
                <div className='flex justify-between'>
                    <div className='mr-4'>
                        <label>First Name</ label>
                        <input type="text"  placeholder='(e.g. john)' className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md" />
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
                    <input type='text' placeholder='eg:0765942235' className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md "  />
                </div>

                <div className='flex flex-col'>
                    <label>Special notes</label>
                    <textarea cols="" rows="3" className=" mt-1 p-2  border-2 border-solid border-gray-100 focus:border-blue-600 rounded-md  outline-none" />
                </div>
               
            </form>
        </div>
    </div>
    <Footer/>


    </>
  )
}

export default BookingPage