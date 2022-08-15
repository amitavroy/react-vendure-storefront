import { gql } from "@apollo/client";

export const removeItemFromOrderMutation = gql`
  mutation ($id: ID!) {
    removeOrderLine(orderLineId: $id) {
      ... on Order {
        id
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
