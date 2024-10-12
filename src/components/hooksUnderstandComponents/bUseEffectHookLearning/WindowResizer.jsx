import { useEffect, useState } from "react";

const WindowResizer = () => {
  const [windowWidth, setWindoWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindoWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    console.log("Event listener added ");

    return () => {
      window.removeEventListener("resize", handleSize);
      console.log("Event listener removed or unmounted from UI");
    };
  }, []);
  // useEffect will run on first render only

  return (
    <div>
      <h2>Window Width Right Now</h2>
      <h1>{windowWidth}px</h1>
    </div>
  );
};

export default WindowResizer;
