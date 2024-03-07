// ApolloWrapper.jsx
import React, { type ReactNode } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createHttpLink } from "@apollo/client/link/http";

interface ApolloWrapperProps {
  children: ReactNode;
}

function ApolloWrapper({ children }: ApolloWrapperProps) {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  }); 

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });

  return (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
  );
}

export default ApolloWrapper;
