import React, { useEffect, useState } from 'react'
import { Star } from "lucide-react";
import ApiService from '../../service/ApiService';

const AddReview = ({handlePopUp}) => {
    const [rating,setRating] =useState(0);
    const [hover,setHover] = useState(0);
    const [review,setReview] = useState("");

    const handleChangeReviewText =(e)=>{
        let value = e.target.value;
        setReview(value); 
    }

    const handleSubmit =()=>{
        if(rating===0){
            alert("please enter rating before submitting");
            return;
        }
        if(review.trim()===""){
            alert("please enter a reveiew before submitting");
            return;
        }

        const reviewData = {
    
            reviewdItemId: "6772ec7679df1f60f2316e03",
            reviewerName : "Hasindu Shehan",
            rate :rating,
            comment: review,
            ratedAt:new Date().toISOString().split('T')[0],
        }
    
            const sendData = async ()=>{
                try{
                    console.log(reviewData,"Reviewwwwwwwwwwwwwwwwwwwwwwwwww");
                    await ApiService.AddReview(reviewData);
                    alert("review Saved !")
                }catch(error){
                    console.error("Error saving review !",error);
                    alert("Error saving review !");
                }
            }
            sendData();
        
    }


  return (
    <div className='fixed flex justify-center items-center p-8 inset-0'>
        <div className='bg-white shadow-md w-[800px] h-[570px] rounded-2xl '>
           <div className='p-4'>
            <h1 className='font-bold text-2xl mb-2'>Add Review</h1>   
            <hr />
            <div className='text-center text-2xl mt-8 mb-2'>
            <h1>How would you rate this order ?</h1>
            </div>
            <div className='flex justify-center mb-6'>
            {
                Array.from({length:5},(_,index)=>{
                    const starValue =index+1;
                    return(
                        <Star
                        key={starValue}
                        className={`w-10 h-10 cursor-pointer ${
                            starValue<=(hover||rating)
                            ?"text-yellow-400"
                            :"text-gray-300"
                    
                        }`}
                        onClick={()=>setRating(starValue)}
                        onMouseEnter={()=>setHover(starValue)}
                        onMouseLeave={()=>setHover(0)}
                        />
                    )
                })
            }
            </div>
            <div className='flex justify-center items-center'>
                <textarea name="" id="" className='w-full mx-8 rounded-lg mt-4 p-4 border border-black solid border-2 outline-none' rows={9} onChange={handleChangeReviewText} >

                </textarea>
                
            </div>
          
          <div className='flex justify-end me-8 mt-2'>
            <button className='bg-black text-white p-2 rounded-lg mt-4 me-2 ' onClick={handlePopUp}>
                Cancel
            </button>
            <button className='bg-blue-700 text-white p-2 rounded-lg mt-4 ' onClick={handleSubmit}>
                Submit
            </button>
          </div>


           </div>
        </div>
    </div>
  )
}

export default AddReview