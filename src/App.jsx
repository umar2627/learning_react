import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(5);

  const addButton =  () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>LEARNING REACT {counter}</h1>
      <h2>LEARNING USESTATE {counter}</h2>

      <h4> counter : {counter}</h4>
      <button
      onClick={addButton}
      >Add Value</button>
      <button
      >remove Value</button>


    </>
  )
}

export default App
