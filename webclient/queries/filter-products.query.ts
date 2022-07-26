import { gql } from "@apollo/client";

export const filterProductsQuery = gql`
  query ($ids: [String!]) {
    products(options: { filter: { id: { in: $ids } } }) {
      totalItems
      items {
        id
        name
      }
    }
  }
`;
