import './App.css'
import { DefaultValue, RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
import { useMemo } from 'react'


function App() {
  return (
    <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("Re-render")
  return <div>
     <CountRenderer />
     <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
        {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is Odd" : null}
  </div>
}

//Below is another way using useMemo (under the hood selectors also use useMemo)
//   const isEven = useMemo(() => 
//     return count % 2 == 0
//   }, [count])

//   return <div>
//     {isEven ? "It is Even" : null}
//   </div>
// }


function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("BUtton re-rendered");
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
