import { gql } from "@apollo/client";

export const setOrderShippingMethod = gql`
  mutation ($id: ID!) {
    setOrderShippingMethod(shippingMethodId: $id) {
      ... on Order {
        id
        code
      }
      ... on IneligibleShippingMethodError {
        errorCode
        message
      }
    }
  }
`;
