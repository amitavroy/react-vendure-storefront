import { gql } from "@apollo/client";
import { PRODUCTS_FULL_VIEW_FRAGMENT } from "./fragments/product-full-view.fragment";

export const filterProductsQuery = gql`
  ${PRODUCTS_FULL_VIEW_FRAGMENT}
  query ($ids: [String!]) {
    products(options: { filter: { id: { in: $ids } } }) {
      totalItems
      items {
        ...product
      }
    }
  }
`;
