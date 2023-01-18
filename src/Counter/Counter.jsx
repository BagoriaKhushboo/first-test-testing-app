import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <button
        data-testid="btnInc"
        className="mx-2"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <input data-testid="txtCounter" type="text" value={counter} />
      <button
        data-testid="btnDec"
        className="mx-2"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
export default Counter;
