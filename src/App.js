import React, {useEffect, useState} from 'react'
import './App.css'
import Button from './components/button/Button'
import Card from './components/card/Card'
import Favorites from './components/favorites/Favorites'

function App() {
  const [quote, setQuote] = useState('')
  const [quotesArray, setQuotesArray] = useState([])
  const generate = () => {
    window
      .fetch('https://baharesfood.herokuapp.com/api/randomquotegenerator')
      .then((res) => res.json())
      .then((r) => setQuote(r))
      .catch((err) => console.log(err))
  }
  const saveFavorite = (quote) => {
    if (quotesArray.includes(quote)) {
      return null
    } else {
      setQuotesArray([quote, ...quotesArray])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button generate={generate} />
        <Card saveFavorite={saveFavorite} quote={quote} />
        <Favorites quotesArray={quotesArray} />
      </header>
    </div>
  )
}

export default App
