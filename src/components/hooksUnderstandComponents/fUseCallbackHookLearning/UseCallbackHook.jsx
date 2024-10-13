import { useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        parentComponentClick
      </button>

      <ChildComponent buttonName="childcomponent Button" />
    </div>
  );
};

export default UseCallbackHook;
