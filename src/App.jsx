import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import UseStateHook from "./components/hooksUnderstandComponents/aUseStateHookLearning/useStateHook";
import SignOut from "./components/conditionalRendering/SignOut";
import SiginIn from "./components/conditionalRendering/siginIn";

function App() {
  const [text, setText] = useState("Hello World");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleTextChange = () => {
    setText(text === "Namaste World" ? "Hello World" : "Namaste World");
  };

  const handleFlag = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <div className="parent-container">
        <div className="section-one">
          <UserCard
            title="luffy"
            style={{ borderRadius: "20px" }}
            handleTextChange={handleTextChange}
            text={text}
          />
          <UserCard
            title="light yagami"
            handleTextChange={handleTextChange}
            text={text}
          />
          <UserCard
            title="ironman"
            style={{ borderRadius: "20px" }}
            handleTextChange={handleTextChange}
            text={text}
          />
        </div>

        <div className="section-two">
          <h1>UseState Hook</h1>
          <UseStateHook />
        </div>

        <div>
          <h1>UnderStanding Conditional Rendering</h1>
          <div style={{ display: "flex", gap: "2rem" }}>
            {isLoggedIn ? (
              <SignOut handleFlag={handleFlag} />
            ) : (
              <SiginIn handleFlag={handleFlag} />
            )}
            {isLoggedIn && <SignOut />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
