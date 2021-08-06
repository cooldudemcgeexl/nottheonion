import { gql } from "@apollo/client";

export const articleQuery = gql`
  query Article($inputID: Int) {
    article(inputID: $inputID) {
      articleID
      articleHeadline
      articleText
      imageUrl
    }
  }
`;

export const numArticlesQuery = gql`
  query NumArticles {
    numArticles
  }
`;
