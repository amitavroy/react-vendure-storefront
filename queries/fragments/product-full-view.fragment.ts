import { gql } from "@apollo/client";
import { FEATURED_ASSET } from "./featured-asset.fragment";

export const PRODUCTS_FULL_VIEW_FRAGMENT = gql`
  ${FEATURED_ASSET}
  fragment product on Product {
    id
    name
    slug
    featuredAsset {
      ...featuredAsset
    }
    variants {
      sku
      name
      productId
      price
    }
  }
`;
