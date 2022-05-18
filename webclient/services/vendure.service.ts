import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  InMemoryCache,
} from "@apollo/client";

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
      query: gql`
        query {
          products {
            items {
              name
            }
          }
        }
      `,
    });
    return response;
  };
}
