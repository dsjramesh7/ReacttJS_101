import { useState } from "react";

const EventsHandling = () => {
  const [inputValue, setInputValue] = useState("");
  function giveAlertMessage() {
    alert("Hisashiburi Dana Mugiwara");
  }

  function handleCursor() {
    alert("Zara Zara touch me touch me....touch me...");
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h1>Event Handling in React</h1>
      <button onClick={giveAlertMessage}>Message from me to you!!!</button>

      <p style={{ cursor: "pointer" }} onMouseOver={handleCursor}>
        place cursor on me
      </p>

      <input type="text" onChange={handleInputChange} />
      <h1>{inputValue}</h1>
    </div>
  );
};

export default EventsHandling;
