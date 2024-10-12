import { useEffect, useState } from "react";
import WindowResizer from "./WindowResizer";
import DataFetching from "./DataFetching";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  // variation 1: which runs on every render
  // useEffect(() => {
  //   alert("here we go again");
  // });

  // variation 2: useEffect will run on first render only
  // useEffect(() => {
  //   alert("only on first render, dattebayo!!!");
  // }, []);

  // variation 3: will render on dependency you provided and also for multiple dependency it will render
  // useEffect(() => {
  //   alert("count update so i am here buddy");
  // }, [count]);

  // variation 4: this time will add clean up function
  useEffect(() => {
    // render side effect
    alert("count is updated");

    // unmount or clean up function
    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]);

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>UseEffect Learning</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseCount}>increase count</button>

      <br />
      <br />
      <br />

      {/* <DataFetching /> */}
      <WindowResizer />
    </div>
  );
};

export default UseEffectHook;
