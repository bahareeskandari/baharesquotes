import React, {useEffect, useState} from 'react'
import './card.css'

function Card({saveFavorite, quote}) {
  return (
    <div class="flip-card-container">
      <div class="flip-card">
        <div class="flip-card-front">
          <p>Hover to see your quote</p>
        </div>
        <div class="flip-card-back">
          {quote ? (
            <p>
              {' '}
              {quote.content}
              <span>- {quote.originator.name} -</span>
              <button onClick={() => saveFavorite(quote)}>Save</button>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
