import React from "react";
import { useContext } from "react";
import { Themes } from "../UseContect/Contect";

const Thridy = () => {
  const { changes, ChangesTheme } = useContext(Themes);

  return (
    <div
      style={{
        backgroundColor: changes === "Dark" ? "#00008b" : "#ffe4c4",
        padding: "30px",
      }}
    >
      <button onClick={() => ChangesTheme()}>Theme</button>
    </div>
  );
};

export default Thridy;
