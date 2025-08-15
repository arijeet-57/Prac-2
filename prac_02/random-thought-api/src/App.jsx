import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState("");

  const nextQuote = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      setQuote(data.line);
    }catch (err) {
      setQuote("Error in loading the quote...")
    }
  }

  useEffect(() => {
   nextQuote();
  }, [])

  return (
  <div>
    <Quote quote={quote} />
    <NextQuote  nextQuote={nextQuote}/>
  </div>
  )
}

function Quote({quote}) {
  return <div>
    <p>{quote}</p>
  </div>
}

function NextQuote({nextQuote}) {

  return (
    <button onClick={nextQuote}>Next Quote</button>
  )

}

export default App
