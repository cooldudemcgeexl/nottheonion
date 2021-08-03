import { gql } from "@apollo/client";

export const articleQuery = gql`
    {
        articleID
        articleHeadline
        articleText
        imageUrl
    }
`;