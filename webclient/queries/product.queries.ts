import { gql } from "@apollo/client";

export const productListing = gql`
  query {
    products {
      items {
        id
        name
        slug
        featuredAsset {
          width
          height
          preview
        }
        variants {
          sku
          name
          productId
          price
        }
      }
    }
  }
`;
