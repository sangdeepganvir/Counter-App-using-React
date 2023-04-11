import { useState } from "react";
import "./styles.css";
function Counter() {
  //let count = 0;
  let [count, setCount] = useState(0);
  let [factor, setFactor] = useState(1);
  const handleIncrement = () => {
    setCount(count + factor);
    if (count < 0) {
    }
  };
  const handleDeccrement = () => {
    setCount(count - factor);
  };
  const handleUpdateFactor = (inputFactor) => {
    if (inputFactor) {
      setFactor(inputFactor);
    } else {
      setFactor(1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="Counter">
      <h3 className="count" style={{ color: count > 0 ? "green" : "red" }}>
        {count}
      </h3>
      <div className="btn-Counter">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDeccrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="factortext">
        Enter the factor by Which you want to Increase or Decrease the Counter
        <input
          type="number"
          value={factor}
          onChange={(e) => handleUpdateFactor(e.target.valueAsNumber)}
        />
      </div>
      <div>
        {count >= 0 ? (
          <p className="message"> Positive Number !!! </p>
        ) : (
          <p className="message">Negative Number !!!</p>
        )}
      </div>
    </div>
  );
}

export default Counter;

//Difference Between Props and State
/*
State is like local variables in a function.
It is the local state of the component which cannot be accessed and modified outside of the component. 

Props is like function Parameter
 It make components reusable by giving components the ability to receive data from their parent component.

*/
