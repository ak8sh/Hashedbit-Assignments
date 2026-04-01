import React, { useState } from "react";
import Calculator from "./Calculator";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [view, setView] = useState("calculator");

  return (
    <div className="app">

      {/* Top Center Switch */}
      <div className="nav">
        <button onClick={() => setView("calculator")}>Calculator</button>
        <button onClick={() => setView("todo")}>Todo</button>
      </div>

      {/* Component */}
      <div className="content">
        {view === "calculator" ? <Calculator /> : <Todo />}
      </div>

    </div>
  );
}

export default App;