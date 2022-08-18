import { gql } from "@apollo/client";

export const userAddressQuery = gql`
  query {
    activeCustomer {
      addresses {
        id
        fullName
        company
        streetLine1
        streetLine2
        city
        country {
          code
          name
        }
        postalCode
        phoneNumber
        province
        defaultShippingAddress
        defaultShippingAddress
      }
    }
  }
`;
