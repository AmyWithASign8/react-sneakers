import React from 'react'

function Button(props) {
  return (
    <button className='greenButton'>
        {props.children}
    </button>
  )
}

export default Button