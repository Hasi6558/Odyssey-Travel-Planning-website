import React from 'react'
import { useState, useEffect } from 'react';
import ApiService from '../../service/ApiService';

const PlanedTrip = () => {


    const [plans, setPlans] = useState([]);
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');

    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const planData = await ApiService.getTravelPlansByUserId(userId, token);
                    setPlans(planData);

                } catch (error) {
                    console.error('Error fetching plan data', error);

                }

            }
            fetchData();

        }, []
    )
    return (


        <div className='min-h-screen'>
            <div className='text-2xl  mx-4 my-4'>Planned Travels</div>

            <div >
                {plans.length == 0 && <div className='text-center text-2xl'>No planned trips</div>}
                {plans.length != 0 && plans && plans.map((plan) => (
                    <a href={`/trip-planDetails/${plan.id}`} key={plan.id}>
                        <div className='flex items-center rounded-xl bg-gray-200 p-8 m-4'>
                            <div className='me-4'>
                                <p className='text-xl'>{plan.draftName}</p>
                            </div>
                            <div className='text-gray-500 text-sm'>{plan.draftSavingTime} </div>

                        </div>
                    </a>

                ))}
            </div>


        </div>

    )
}

export default PlanedTrip