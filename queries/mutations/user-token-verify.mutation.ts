import { gql } from "@apollo/client";

export const userTokenVerifyMutation = gql`
  mutation ($token: String!) {
    verifyCustomerAccount(token: $token) {
      ... on CurrentUser {
        id
        identifier
      }
      ... on VerificationTokenInvalidError {
        errorCode
        message
      }
      ... on VerificationTokenExpiredError {
        errorCode
        message
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
