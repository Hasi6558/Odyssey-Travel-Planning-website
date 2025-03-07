import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import PlanCard from '../../component/cards/PlanCard'
import ApiService from '../../service/ApiService'
import { useParams } from 'react-router'
import PlannedTripBg from '../../assets/images/trip_planner_bg.jpg'

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
                    backgroundImage: `url(${PlannedTripBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "200px",
                    width: "100%",
                }} className='relative'>
                    <div className='flex absolute bottom-2 items-end justify-between w-full'>
                        <div>
                            <h1 className='text-white text-5xl font-bold ms-4 mb-2'>{plan.draftName}</h1>
                            <h3 className='text-white ml-4'>Total Cost : {plan.totalCost} $</h3>
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
                        <p>No sections available</p>
                    )}
                </div>

            </div>

            <Footer />
        </>

    )
}

export default PlannedTripDetails