import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <div className={`App ${mode}`}>
      <button onClick={toggleMode}>
        {mode === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
