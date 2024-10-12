import "./App.css";
import UserCard from "./components/UserCard";
import UseStateHook from "./components/hooksUnderstandComponents/aUseStateHookLearning/useStateHook";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="section-one">
          <UserCard title="luffy" style={{ "border-radius": "20px" }} />
          <UserCard title="light yagami" />
          <UserCard title="ironman" style={{ "border-radius": "20px" }} />
        </div>

        <div className="section-two">
          <h1>UseState Hook</h1>
          <UseStateHook />
        </div>
      </div>
    </>
  );
}

export default App;
