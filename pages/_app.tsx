import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../config/apollo.config";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ApolloProvider client={apolloClient}>
      <AnyComponent {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
