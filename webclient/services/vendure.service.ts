import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { productListing } from "../queries/product.queries";

export class VendureService {
  private __client;

  constructor() {
    this.__client = new ApolloClient({
      uri: "https://demo.vendure.io/shop-api",
      cache: new InMemoryCache(),
    });
  }

  public fetchProducts = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: productListing,
    });
    return response;
  };
}
