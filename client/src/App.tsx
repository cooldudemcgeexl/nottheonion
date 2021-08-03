import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { ArticleQueryResult } from "./queries/queryTypes";
import { articleQuery } from "./queries/article";
import GenerateButton from "./components/GenerateButton";

function App() {
  const { data: article } = useQuery<ArticleQueryResult>(articleQuery);

  const handleButtonClick = useCallback(() => {
    alert(
      `Article title: ${article?.articleID}\nArticle Headline: ${article?.articleHeadline}\nArticle Text: ${article?.articleText}\nImage URL: ${article?.imageUrl}`
    );
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
          <span style={{ fontWeight: "bold" }}>Not</span> The Onion
        </span>
      </header>
      <body>
        {article?.articleID}
        <p></p>
        <GenerateButton handleButtonClick={handleButtonClick} />
      </body>
    </div>
  );
}

export default App;
