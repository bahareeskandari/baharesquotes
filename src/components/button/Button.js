import React, {useEffect, useState} from 'react'
import './button.css'

function Button(props) {
  return (
    <div className="middle">
      <button className="btn " onClick={props.generate}>
        <div className="Click"> Quote </div>{' '}
      </button>
    </div>
  )
}

export default Button
