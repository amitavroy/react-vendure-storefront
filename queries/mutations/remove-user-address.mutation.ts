import { gql } from "@apollo/client";

export const removeCustomerAddressMutation = gql`
  mutation ($id: ID!) {
    deleteCustomerAddress(id: $id) {
      success
    }
  }
`;
