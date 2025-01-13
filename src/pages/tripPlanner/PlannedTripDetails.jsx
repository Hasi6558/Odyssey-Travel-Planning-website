import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import PlanCard from '../../component/cards/PlanCard'
import ApiService from '../../service/ApiService'
import { useParams } from 'react-router'

const PlannedTripDetails = () => {

    const { id } = useParams();

    const [plan, setPlans] = useState({});

    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const planData = await ApiService.getTravelPlanById(id);
                    setPlans(planData);

                } catch (error) {
                    console.error('Error fetching plan data', error);

                }

            }
            fetchData();

        }, []
    )

    return (
        <>
            <NavBar />
            <div className='bg-gray-50 max-w-[800px] m-auto h-screen '>

                <div style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDA%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "200px",
                    width: "100%",
                }} className='relative'>
                    <div className='flex absolute bottom-0 items-end justify-between w-full'>
                        <div>
                            <h1 className='text-white text-5xl font-bold ms-4 mb-2'>{plan.draftName}</h1>
                            <h2 className='text-white text-xl ms-4 mb-2'><span>{plan.noOfSections}</span> Day Travel Planner</h2>
                        </div>

                        <h3 className='text-gray-800 text-white mb-2 text-2xl font-semibold me-8 mb-4' >{plan.draftSavingTime}</h3>
                    </div>

                </div>
                <div className='p-8'>
                    {plan.sections && plan.sections.length > 0 ? (
                        plan.sections.map((section, index) => (
                            <PlanCard key={index} sections={section} />
                        ))
                    ) : (
                        <p>No sections available</p> // Optional, to show a message if there are no sections
                    )}
                </div>

            </div>

            <Footer />
        </>

    )
}

export default PlannedTripDetails