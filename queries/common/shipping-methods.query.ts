import { gql } from "@apollo/client";

export const eligibleShippingMethodsQuery = gql`
  query {
    eligibleShippingMethods {
      id
      code
      name
      price
      priceWithTax
    }
  }
`;
