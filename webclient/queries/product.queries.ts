import { gql } from "@apollo/client";
import { PRODUCTS_FULL_VIEW_FRAGMENT } from "./fragments/product-full-view.fragment";

export const productListing = gql`
  ${PRODUCTS_FULL_VIEW_FRAGMENT}
  query {
    products {
      items {
        ...product
      }
    }
  }
`;
