import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(69);
  // let val = 0;
  let val = useRef(0); // for data persist
  let btnReference = useRef();

  const handleIncrement = () => {
    // val = val + 1; // it will be one everytime because of re render
    val.current = val.current + 1; // it will increase useRef ka jalwa
    console.log("value is: ", val.current);
    setCount(count + 1);
  };

  // this will run on every change and will re render everytime
  useEffect(() => {
    console.log("mein firse render hogaya hu");
  });

  const changeColor = () => {
    btnReference.current.style.background = "red";
  };
  return (
    <div>
      <h1>{count}</h1>
      <button ref={btnReference} onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={changeColor}>Change Increment color</button>
    </div>
  );
};

export default UseRefHook;
