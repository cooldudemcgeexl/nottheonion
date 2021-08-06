import { FC,  useMemo } from "react";
import { articleQuery, ArticleQueryResult } from "../../queries";
import { useQuery } from "@apollo/client";
import "./styles.scss";

type ArticleContentProps = {
  inputID: number;
};

export const ArticleContent: FC<ArticleContentProps> = ({ inputID }) => {
  const { data } = useQuery<ArticleQueryResult>(articleQuery, {
    variables: { inputID },
  });

  const article = useMemo(() => {
    return data?.article ?? null;
  }, [data?.article]);

  return (
    <div>
      <p className="Title-Styling">{article?.articleHeadline ?? ""}</p>
      <img
        className="Image-Styling"
        src={article?.imageUrl ?? ""}
        alt=""
        height="400px"
      ></img>
      <div className="Article-Styling">&emsp;{article?.articleText ?? ""}</div>
    </div>
  );
};
