import React from 'react'
import './ButtonStyle.css'

function BlueButton1(props) {
  return (
    <>
    <button className={props.className}>
        {props.name}
    </button>
    </>
  )
}

export default BlueButton1