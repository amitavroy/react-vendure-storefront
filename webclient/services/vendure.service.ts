import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { productDetailsBySlug } from "../queries/product-details.slug";
import { productSlug } from "../queries/product-slug.query";
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

  public fetchProductSlugs = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: productSlug,
    });
    return response;
  };

  public fetchProductBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: productDetailsBySlug,
      variables: { slug },
    });
    return response;
  };
}
