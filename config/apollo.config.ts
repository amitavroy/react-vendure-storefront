import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const AUTH_TOKEN_KEY = "auth_token";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_VENDURE_URL}`,
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get("vendure-auth-token");
    if (authHeader) {
      // If the auth token has been returned by the Vendure
      // server, we store it in localStorage
      localStorage.setItem(AUTH_TOKEN_KEY, authHeader);
    }
    return response;
  });
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    setContext(() => {
      const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      if (authToken) {
        // If we have stored the authToken from a previous
        // response, we attach it to all subsequent requests.
        return {
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        };
      }
    }),
    afterwareLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default apolloClient;
