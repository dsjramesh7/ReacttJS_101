import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const handleDecreaseCount = () => {
    // if (count === 0) {
    //   return 0;
    // } else {
    //   setCount(count - 1);
    // }
    return count === 0 ? setCount(count) : setCount(count - 1);
  };
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
    </div>
  );
};

export default UseStateHook;
