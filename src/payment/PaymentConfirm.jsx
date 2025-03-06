import React from 'react'
import Footer from '../component/Footer/Footer'
import NavBar from '../component/navBar/NavBar'

const PaymentConfirm = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-center max-w-[1000px] m-auto border-solid border-2 border-gray-300 rounded-[35px] p-40'>
        <h1 className='text-4xl font-bold my-4 text-green-700'>Payment Confirmed !</h1> 

        <p className='text-lg  mt-8'>Thank you for your payment.Your booking is confirmed.</p>
       
      </div>

      </div>
      
    </div>
    
  )
}

export default PaymentConfirm