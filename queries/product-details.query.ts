import { gql } from "@apollo/client";
import { FEATURED_ASSET } from "./fragments/featured-asset.fragment";

export const productDetailsBySlug = gql`
  ${FEATURED_ASSET}
  query ($slug: String!) {
    product(slug: $slug) {
      id
      name
      createdAt
      updatedAt
      name
      description
      featuredAsset {
        ...featuredAsset
      }
      facetValues {
        name
        code
        id
        facet {
          name
        }
      }
      variantList {
        totalItems
      }
      variants {
        sku
        name
        productId
        price
        id
      }
    }
  }
`;
