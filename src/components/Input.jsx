import React from 'react'

function Input(props) {
  return (
    <input className='inputStyles' placeholder={props.placeName} type='text' onChange={props.onChangeInput} value={props.valueInput}/>
  )
}

export default Input