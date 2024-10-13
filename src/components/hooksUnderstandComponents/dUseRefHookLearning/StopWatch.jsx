import { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  function handleStart() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval();
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h1>CountDown: {time}seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
