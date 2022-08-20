import { gql } from "@apollo/client";

export const changeOrderStateMutation = gql`
  mutation ($state: String!) {
    transitionOrderToState(state: $state) {
      ... on Order {
        id
      }
      ... on OrderStateTransitionError {
        errorCode
        message
        transitionError
        fromState
        toState
      }
    }
  }
`;
