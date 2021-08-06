import { FC, useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  GenerateButton,
  GenerateLightButton,
  ArticleContent,
} from "./components";

const App: FC = () => {
  const [isLightMode, setLightMode] = useState(true);

  const handleLightButtonClick = useCallback(() => {
    setLightMode(!isLightMode);
  }, [isLightMode]);

  const [updateNum, setUpdate] = useState(0);

  const handleButtonClick = useCallback(() => {
    setUpdate(updateNum + 1);
  }, [updateNum]);

  return (
    <div className={isLightMode ? "App" : "App-Dark"}>
      <header className={isLightMode ? "App-Header" : "App-Header-Dark"}>
        <span>
          <span style={{ fontWeight: "bold" }}>Not</span> The Onion{" "}
        </span>
        <GenerateButton
          handleButtonClick={handleButtonClick}
          isLightMode={isLightMode}
        />
      </header>
      <body className={isLightMode ? "Body" : "Body-Dark"}>
        <ArticleContent inputID={updateNum} />
      </body>
      <GenerateLightButton
        handleLightButtonClick={handleLightButtonClick}
        isLightMode={isLightMode}
      />
    </div>
  );
};

export default App;
