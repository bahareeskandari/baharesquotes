import React, {useEffect, useState} from 'react'
import './favorites.css'

function Favorites({quotesArray, deleteQuote}) {
  return (
    <div className="myBox myShadowBox">
      <h4 className="h4">PostgreSQL database quotes</h4>
      {quotesArray.map((quote) => (
        <p className="text fade" key={quote.id}>
          {quote.content}
          <span>- {quote.author} -</span>
          <button onClick={() => deleteQuote(quote)}>delete</button>
        </p>
      ))}
    </div>
  )
}

export default Favorites
