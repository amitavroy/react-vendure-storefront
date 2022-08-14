import { gql } from "@apollo/client";
import { FEATURED_ASSET } from "./fragments/featured-asset.fragment";

export const myCartQuery = gql`
  ${FEATURED_ASSET}
  query {
    activeOrder {
      id
      code
      state
      lines {
        id
        unitPrice
        linePrice
        linePriceWithTax
        quantity
        productVariant {
          id
          sku
          name
          price
          product {
            name
            slug
            featuredAsset {
              ...featuredAsset
            }
          }
        }
      }
      billingAddress {
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
      }
      shippingAddress {
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
      }
      discounts {
        type
        description
        amount
        amountWithTax
      }
      total
      totalWithTax
    }
  }
`;
