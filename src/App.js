import React, {useEffect, useState} from 'react'
import './App.css'
import Button from './components/button/Button'
import Card from './components/card/Card'
import Favorites from './components/favorites/Favorites'
import {
  fetchQuotesFromExternalApi,
  fetchApiFromPostGreSQL,
  saveQuoteToDatabase,
  deleteQuoteFromDataBase,
} from './handlers/apiFetches'

function App() {
  const [quote, setQuote] = useState('')
  const [quotesArray, setQuotesArray] = useState([])

  useEffect(() => {
    fetchApiFromPostGreSQL().then((data) => {
      setQuotesArray(data)
    })
  }, [quotesArray])

  const generateNewQuote = async () => {
    fetchQuotesFromExternalApi().then((r) =>
      setQuote({author: r.originator.name, content: r.content})
    )
  }

  const deleteQuote = (quote) => {
    deleteQuoteFromDataBase(quote)
  }

  const saveFavorite = (quote) => {
    const found = quotesArray.some((item) => item.content === quote.content) // if the frontend already has that quote
    if (found) {
      return null
    } else {
      saveQuoteToDatabase(quote)
      setQuotesArray([quote, ...quotesArray])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button generateNewQuote={generateNewQuote} />
        <Card saveFavorite={saveFavorite} quote={quote} />
        <Favorites quotesArray={quotesArray} deleteQuote={deleteQuote} />
      </header>
    </div>
  )
}

export default App
