import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});
  
  useEffect(() => {
    setExchangeData({
      returns: 100
    })
  }, [])

  useEffect(() => {
    setExchange2Data({
      returns: 100
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBankData({
      income: 100
    });
    }, 5000);
  }, [])

   const cryptoReturns = exchangeData.returns + exchange2Data.returns;
   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

   return <div>
    Hello, Your ITR is {incomeTax}
   </div>


}

export default App
