import React, {useEffect, useState} from 'react'
import './favorites.css'

function Favorites({quotesArray}) {
  return (
    <div class="myBox myShadowBox">
      Saved Quotes
      {quotesArray.map((m) => (
        <li>{m.originator.name}</li>
      ))}
    </div>
  )
}

export default Favorites
