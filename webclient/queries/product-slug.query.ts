import { gql } from "@apollo/client";

export const productSlug = gql`
  query {
    products {
      items {
        id
        slug
      }
    }
  }
`;
