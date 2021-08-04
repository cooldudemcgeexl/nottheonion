import { FC, useMemo } from "react";
import { articleQuery, ArticleQueryResult } from "../../queries";
import { useQuery } from "@apollo/client";

type ArticleContentProps = {
  numArticles: number;
};

export const ArticleContent: FC<ArticleContentProps> = ({ numArticles }) => {
  const { data } = useQuery<ArticleQueryResult>(articleQuery, {
    variables: { inputID: Math.floor(Math.random() * numArticles) },
  });

  const article = useMemo(() => {
    return data?.article ?? null;
  }, [data?.article]);

  return (
    <div>
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>
        {article?.articleHeadline ?? ""}
      </p>
      <img src={article?.imageUrl ?? ""} alt="" height="400px"></img>
      <div>{article?.articleText ?? ""}</div>
    </div>
  );
};
