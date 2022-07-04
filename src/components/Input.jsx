import React from 'react'

function Input(props) {
  return (
    <input className='inputStyles' placeholder={props.placeName} type='text'/>
  )
}

export default Input