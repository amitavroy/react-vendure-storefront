import { gql } from "@apollo/client";

export const facetsQuery = gql`
  query {
    facets {
      totalItems
      items {
        id
        name
        code
        values {
          id
          name
        }
      }
    }
  }
`;
