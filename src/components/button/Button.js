import React, {useEffect, useState} from 'react'
import './button.css'

function Button(props) {
  return (
    <div className="middle">
      <button className="btn " onClick={props.generateNewQuote}>
        <div className="Click"> Quote </div>{' '}
      </button>
      <p className="simpleTEXT">
        The page uses external api and
        <br /> loads slowly the first time.
        <br />
        Click multiple times
      </p>
    </div>
  )
}

export default Button
