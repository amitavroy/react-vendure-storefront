import { gql } from "@apollo/client";

export const availablePaymentMethodsQuery = gql`
  query {
    eligiblePaymentMethods {
      id
      name
      code
      description
      isEligible
    }
  }
`;
