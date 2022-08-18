import { gql } from "@apollo/client";

export const addAddressToCustomerMutation = gql`
  mutation (
    $fullName: String!
    $streetLine1: String!
    $streetLine2: String!
    $city: String!
    $province: String!
    $postalCode: String!
    $countryCode: String!
    $phoneNumber: String!
  ) {
    createCustomerAddress(
      input: {
        fullName: $fullName
        streetLine1: $streetLine1
        streetLine2: $streetLine2
        city: $city
        province: $province
        postalCode: $postalCode
        countryCode: $countryCode
        phoneNumber: $phoneNumber
      }
    ) {
      ... on Address {
        id
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        country {
          code
          name
        }
        postalCode
        phoneNumber
        defaultShippingAddress
        defaultShippingAddress
      }
    }
  }
`;
