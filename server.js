const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, hasPerson, getQuotesByPerson } = require('./utils');
const { get } = require('express/lib/response');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}.`)
})

app.get('/api/quotes', (req, res, next) => {
  const { person } = req.query;
  const quotesObject = new Object();

  if (!person){ // No person query
    quotesObject.quotes = quotes;
    res.status(200).send(quotesObject)
  } else { // Has person query
    if (!hasPerson(quotes, person)){ // incorrect query 
      res.status(404).send(getQuotesByPerson(quotes, person))
    } else { // correct query
      res.status(200).send(getQuotesByPerson(quotes, person))
    }
  } 
})

app.get('/api/quotes/random', (req, res, next) => {
  const quoteObject = getRandomElement(quotes);
  const quoteObjectResponse = { quote: quoteObject }
  res.status(200).send(quoteObjectResponse)
})

app.post('/api/quotes', (req, res, next) => {
  const newQuoteObject = req.query;
  const quoteObjectToPush = {
      quote: newQuoteObject.quote,
      person: newQuoteObject.person
  }

  if( typeof newQuoteObject.quote !== 'string' ||
      typeof newQuoteObject.person !== 'string'){
    res.status(400).send('Invalid quote or name. Please check input.')
  } else {
    quotes.push(quoteObjectToPush)
    res.status(201).send({
      quote: quoteObjectToPush
    })
  }
})