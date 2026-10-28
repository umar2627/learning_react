import { useState } from 'react'
import Button from '../components/Button'

function CountPage() {
  let [counter, setCounter] = useState(6);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
    <h1> counter: {counter}</h1>
      <Button btnText="Add Value" onClick={increment} />
      <br />
      <Button btnText="delete Value" onClick={decrement} />
    </>
  )
}

export default CountPage
