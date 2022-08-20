import { gql } from "@apollo/client";

export const activeOrderQuery = gql`
  query {
    activeOrder {
      id
      code
      state
    }
  }
`;
