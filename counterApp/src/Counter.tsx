import { useReducer, useState } from "react";

interface State {
  age: number;
  name: string;
}

type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "neutral" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { ...state, age: state.age + action.payload };
    case "decrement":
      return { ...state, age: state.age - action.payload };
    case "neutral":
      return { ...state, age: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { name: "Suho", age: 22 });
  const [inputValue, setInputValue] = useState<number>(1);

  return (
    <div>
      <p>My name is {state.name}</p>
      <p>My age is {state.age}</p>
      <p>You can increase or decrease my age below:</p>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />

      <div>
        <button
          onClick={() => dispatch({ type: "increment", payload: inputValue })}
        >
          ADD
        </button>
        <button onClick={() => dispatch({ type: "neutral" })}>RESET</button>
        <button
          onClick={() => dispatch({ type: "decrement", payload: inputValue })}
        >
          SUB
        </button>
      </div>
    </div>
  );
};

export default Counter;
