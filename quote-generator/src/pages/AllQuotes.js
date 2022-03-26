import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: "Learning React is nice"},
    { id: 'q2', author: 'Arnold', text: "Get to da Choppa!!"}
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

export default AllQuotes