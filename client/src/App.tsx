import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCallback } from "react";

import GenerateButton from "./components/GenerateButton";

function App() {
  const handleButtonClick = useCallback(() => {
    alert("aaaaaaaaaaaaaaaa");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span
          style={{
            fontSize: "40px",
            color: "black",
            //textShadow: "2px 2px 14px black"   maybe add drop shadow to title if we want!
          }}
        >
          {" "}
          <span style={{ fontWeight: "bold" }}>Not</span> The Onion
        </span>

        <p></p>
        <GenerateButton />
      </header>
    </div>
  );
}

export default App;
