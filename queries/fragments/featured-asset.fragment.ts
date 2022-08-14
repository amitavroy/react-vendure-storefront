import { gql } from "@apollo/client";

export const FEATURED_ASSET = gql`
  fragment featuredAsset on Asset {
    width
    height
    preview
  }
`;
