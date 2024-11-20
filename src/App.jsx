import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import TProvaid from "./UseContect/Contect";
// import First from "./React memo/First";
// import Second from "./UseCallback/Second";
// import Thridy from "./UseCallback/Thridy";
import TaskContecs from "./UseContect/TaskContecs";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <TProvaid>
    //   {/* <First items={[{ id: 1, name: "Anna", city: "Lviv" }]} /> */}
    //   <Thridy />
    //   {/* <Second /> */}
    // </TProvaid>
    <TaskContecs></TaskContecs>
  );
}

export default App;
