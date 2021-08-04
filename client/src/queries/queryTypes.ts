export type ArticleQueryResult = {
  article: Article;
};

export type Article = {
  articleID: number;
  articleHeadline: string;
  articleText: string;
  imageUrl: string;
};

export type NumArticlesResult = {
  numArticles: number;
};
