// useState is a React Hook that lets a functional component create and manage state.
//  It returns an array with two items: the current state value, and a function to update that state.
import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  /* setInterval(() => {
    setCounter(counter + 1);
  }, 1000);
  */

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default UseState;
