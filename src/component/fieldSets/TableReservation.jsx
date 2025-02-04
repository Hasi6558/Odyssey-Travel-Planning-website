import React from 'react'
import { useEffect, useState } from 'react'
import ApiService from '../../service/ApiService';

const TableReservation = ({id,itemId}) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(2);
    

    const handleReserve =async ()=>{
      const reservation ={
        
        userId:id,
        itemId:itemId,
        date:date,
        time:time,
        peopleCount : people,
        bookingDate: new Date().toLocaleDateString(),

      }
      
      try{
        await ApiService.saveReservation(reservation);
        alert('Reservation is success!!!');
      }catch(e){
        console.error("Error reserve your table!!!",error);
        throw error;
      }


    }

   return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Reserve your table</h2>
     
      <div className='flex w-full'>
       
      <div className="flex items-center border p-2 rounded-md mb-3 w-full mr-1">
        
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full outline-none bg-transparent"
        />
      </div>

      
      <div className="flex items-center border p-2 rounded-md mb-3 w-full ml-1">
        
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      </div>
      

      {/* People Selector */}
      <div className="flex items-center border p-2 rounded-md mb-4">
        <span className="mr-2">👤</span>
        <select
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full outline-none"
        >
          {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "person" : "people"}
            </option>
          ))}
        </select>
      </div>

      {/* Reserve Button */}
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800" onClick={handleReserve}>
        Reserve
      </button>
    </div>
  );
}

export default TableReservation