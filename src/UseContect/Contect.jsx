import { Children, createContext, useState } from "react";
export const Themes = createContext(null);

const TProvaid = ({ children }) => {
  const [changes, setChanges] = useState("light");
  const ChangesTheme = () => {
    setChanges((prev) => (prev === "light" ? "Dark" : "light"));
  };
  console.log(changes);
  return (
    <Themes.Provider value={{ changes, ChangesTheme }}>
      {children}
    </Themes.Provider>
  );
};

export default TProvaid;
