import { createContext, useState } from "react";
import ChildA from "./ChildA";

export const UserContext = createContext();
export const ThemeContext = createContext();
const UseContextHook = () => {
  const [user, setUser] = useState({ name: "adele" });
  const [theme, setTheme] = useState("light");
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="bg-container"
          style={{ background: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default UseContextHook;
