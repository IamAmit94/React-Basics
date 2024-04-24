import { useState, useMemo } from "react"
// import useCustomMemo from "./hooks/use_custome_memo";
import './App.css'

const App = () => {
  const[counter, setCounter] = useState(0);
const [counter2, setCounter2] = useState(100)

  const squaredValue = () => {
      return counter * counter
  }

  const memoisedSquareValue = useMemo(squaredValue, [counter]); // useMemo hook
  // const memoisedSquareValue = useCustomMemo(squaredValue, [counter]); // custome useMemo hook
  
  return (
   
    <div className="App">
      <h2>Counter: {counter}</h2>
      <h2>Squared Counter: {memoisedSquareValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  )
}

export default App