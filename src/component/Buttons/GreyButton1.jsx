import React from 'react'
import { useNavigate } from 'react-router'

const GreyButton1 = (props) => {

    const navigate = useNavigate();

    return (
        <button className='p-3 bg-slate-500 rounded-lg text-white text-bold me-2 ' onClick={() => navigate(props.navigationLink)}>

            {props.label}



        </button>
    )
}

export default GreyButton1