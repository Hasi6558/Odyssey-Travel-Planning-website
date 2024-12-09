import React, { useState } from 'react'
import './InputFieldSet.css'

function InputFieldSet(props) {

    const [passwordVisible,setPasswordVisible] = useState(false);
    
  const handlePasswordVisible = (e) => {
    e.preventDefault(); 
    setPasswordVisible(!passwordVisible); 
  };
  return (
    <>
            <fieldset className='input-fieldset'>
            <legend>{props.legend}</legend>
                <div className="input-container">
                <input type={passwordVisible? "text" :props.type} placeholder={props.placeholder}/>
                {props.type!="password" && <i class={props.iconClass}></i>}
                {props.type=="password" &&     
                <button onClick={handlePasswordVisible} className='showPassButton'>
                    <i class={props.iconClass}></i>
                </button>
                }
                </div>
            </fieldset>
    </>
  )
}

export default InputFieldSet