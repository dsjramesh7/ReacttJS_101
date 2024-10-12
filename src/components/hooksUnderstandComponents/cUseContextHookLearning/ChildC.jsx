import { useContext } from "react";
import { ThemeContext, UserContext } from "./UseContextHook";

const ChildC = () => {
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleThemeHandle = () => {
    if (theme === "light") {
      // console.log("true mode");
      setTheme("dark");
    } else {
      // console.log("false mode");
      setTheme("light");
    }
  };
  return (
    <div>
      <p style={{ color: "black" }}>{user.name}</p>
      <button onClick={toggleThemeHandle}>Change Background</button>
    </div>
  );
};

export default ChildC;
