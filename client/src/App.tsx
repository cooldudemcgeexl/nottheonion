import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCallback } from "react";

import GenerateButton from './components/GenerateButton'

function App() {
  const handleButtonClick = useCallback(() => {
    alert("aaaaaaaaaaaaaaaa");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span style={{ fontSize: "40px" }}> <span style={{fontWeight:'bold'}}>Not</span> The Onion</span>
       

        <p></p>
       <GenerateButton></GenerateButton>
      </header>
    </div>
  );
}

export default App;
