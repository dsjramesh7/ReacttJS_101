import "./UserCard.css";
import Button from "./Button";
import { useState } from "react";
const UserCard = ({ title, style, text, handleTextChange }) => {
  // console.log(props);
  // console.log(title);

  // passed this thing to parent Component to understand state lifing
  // const [text, setText] = useState("Hello World");
  // const handleTextChange = () => {
  //   setText(text === "Namaste World" ? "Hello World" : "Namaste World");
  // };
  return (
    <div className="user-container" style={style}>
      {/* <h1 id="user-title">Light Yagami</h1> */}
      <h1 id="user-title">{title}</h1>
      <img id="user-image" src="./lightyagami.jpg" alt="Death-Note-Character" />
      <p id="user-desc">Description</p>
      <div>
        <h2>{text}</h2>
        <Button handleTextChange={handleTextChange}>
          <h1>Click me</h1>
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
