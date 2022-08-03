import { gql } from "@apollo/client";

export const addItemToOrderMutation = gql`
  mutation ($productId: ID!, $qty: Int!) {
    addItemToOrder(productVariantId: $productId, quantity: $qty) {
      ... on Order {
        id
        code
        state
        subTotal
        subTotalWithTax
      }
      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }
    }
  }
`;
