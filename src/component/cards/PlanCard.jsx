import React from 'react'

const PlanCard = ({ sections }) => {


    console.log(sections);

    const nonEmptySections = sections.filter(section => section.length > 0);

    return (
        <div>
            {nonEmptySections.length > 0 && (
                <div className='flex items-center'><div className='h-2 w-2 bg-black rounded-full m-2'></div><p className='text-lg '>
                    {sections[0] && sections[0][0]}
                </p></div>
            )}


            <div className='flex mt-2'>
                <div className='w-1 h-parent  bg-black rounded-full m-2'></div>
                <div className='ms-5'>

                    {nonEmptySections.map((section, index) => (
                        <div key={index} className='my-2'>
                            <div><h2>{section[1]}</h2></div>
                            <div><h4 className='text-sm'>Cost : {section[2]} $</h4></div>
                        </div>

                    ))}
                </div>

            </div>

        </div>
    )
}

export default PlanCard