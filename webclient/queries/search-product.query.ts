import { gql } from "@apollo/client";

export const searchProductQuery = gql`
  query ($ids: [ID!]) {
    search(input: { facetValueIds: $ids }) {
      totalItems
      items {
        id: productId
      }
    }
  }
`;
