import React, {useEffect, useState} from 'react'
import './card.css'

function Card({saveFavorite, quote}) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-front">
          <p>
            Hover to see quote. <br /> Please be aware the webpage uses external api and loads
            slowly, you might need to click the button multiple times.
          </p>
        </div>
        <div className="flip-card-back">
          {quote ? (
            <p>
              {' '}
              {quote.content}
              <span>- {quote.author} -</span>
              <button onClick={() => saveFavorite(quote)}>Save</button>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
