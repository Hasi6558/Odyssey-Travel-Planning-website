import React from 'react'
import '../../style/Style.css'



function SocialMediaButton(props) {
    const handleClick= (e) =>{
    e.preventDefault();
    }


  return (
    
        <button className='socialMediaBtn' onClick={handleClick}>
            <div className='socialMedia-btn-container'>
                <img src={props.src} alt=""/>
            </div>
    </button>

    
    
  )
}

export default SocialMediaButton