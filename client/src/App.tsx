import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCallback } from "react";

function App() {
  const handleButtonClick = useCallback(() => {
    alert("aaaaaaaaaaaaaaaa");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span style={{ fontSize: "40px" }}>Not The Onion </span>
        <img
          src={
            "https://i5.walmartimages.com/asr/9ef999d2-a1d2-4ab7-bde3-70995f9aa155_1.3979fa6701d2b8528eb2d8e9aa6ead68.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
          }
          className="App-logo"
          alt="logo"
        />

        <p></p>
        <button onClick={handleButtonClick}>Generate New</button>
      </header>
    </div>
  );
}

export default App;
