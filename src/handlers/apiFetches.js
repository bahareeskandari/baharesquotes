export const fetchQuotesFromExternalApi = () => {
  return window
    .fetch('https://baharesfood.herokuapp.com/api/randomquotegenerator')
    .then((res) => res.json())
}

export const fetchApiFromPostGreSQL = () => {
  return window
    .fetch('https://sequelizeserver.herokuapp.com/api/quotes', {method: 'GET'})
    .then((rawJSON) => rawJSON.json())
}

export const saveQuoteToDatabase = (quote) => {
  window.fetch('https://sequelizeserver.herokuapp.com/api/add', {
    method: 'POST',
    body: JSON.stringify({author: quote.author, content: quote.content}),
    headers: {'Content-Type': 'application/json'},
  })
}

export const deleteQuoteFromDataBase = (quote) => {
  window.fetch(`https://sequelizeserver.herokuapp.com/api/${quote.id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  })
}
