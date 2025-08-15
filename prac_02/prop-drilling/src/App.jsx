import { useState, createContext, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 1️⃣ Create the context
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    // 2️⃣ Provide the value to the context
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <Count />
        <Buttons />
      </div>
    </CountContext.Provider>
  );
}

function Count() {
  // 3️⃣ Consume context directly
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  // 3️⃣ Consume context directly
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
