import { gql } from "@apollo/client";

export const productDetailsBySlug = gql`
  query ($slug: String!) {
    product(slug: $slug) {
      id
      name
      createdAt
      updatedAt
      name
      description
      featuredAsset {
        width
        height
        preview
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
      }
    }
  }
`;
