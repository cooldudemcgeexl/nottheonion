import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { ArticleQueryResult } from "./queries/queryTypes";
import { articleQuery } from "./queries/article";
import GenerateButton from "./components/GenerateButton";
import GenerateLightButton from "./components/ThemeButton";

function App() {
  const [isLightMode, setLightMode] = useState(true);

  const { data: article } = useQuery<ArticleQueryResult>(articleQuery);

  const handleButtonClick = useCallback(() => {
    alert(
      `Article title: ${article?.articleID}\nArticle Headline: ${article?.articleHeadline}\nArticle Text: ${article?.articleText}\nImage URL: ${article?.imageUrl}`
    );
  }, []);

  const handleLightButtonClick = useCallback(() => {
    setLightMode(!isLightMode);
  }, [isLightMode]);

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
        {article?.articleID}
        <p></p>
        <GenerateLightButton
          handleLightButtonClick={handleLightButtonClick}
          isLightMode={isLightMode}
        />
      </body>
    </div>
  );
}

export default App;
