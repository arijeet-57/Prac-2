import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    })

    window.addEventListener("offline", () => {
      setIsOnline(false);
    })
  }, [])

  return isOnline;
}


function useDebounce(value, timeout) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [value])

  return debounceValue;
}



function App() {
  const isOnline = useIsOnline();
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);
 
 if(isOnline) {
  return <div> I am online</div>
 }


  return <div>
    Debounced Value is {debouncedValue}
    <input type="text" onChange={e = setValue(e.target.value)} />
    Offline
  </div>
 }

export default App
