import { useState } from "react"
import CountSpan from "./CountSpan";
import Button from "./Button";

export default (props) => {

  // const countState = useState(0);

  // const count = countState[0];
  // const setCount = countState[1];

  const [count, setCount] = useState(0);

  // const handleIncrement = () => setCount(count + 1);

  // const handleDecrement = () => setCount(count - 1);

  return (
    <>
      <CountSpan count={count} />
      <section>
        <Button operator="+" count={count} setCount={setCount} />
        <Button operator="-" count={count} setCount={setCount} />
      </section>
    </>
  )
}