import { gql } from "@apollo/client";

export const PRODUCTS_FULL_VIEW_FRAGMENT = gql`
  fragment product on Product {
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
`;
