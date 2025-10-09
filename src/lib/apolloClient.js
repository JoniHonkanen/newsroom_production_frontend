import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
// Palvelin- ja client-puolella yhteinen funktio
export function createApolloClient(headers = {}) {
  return new ApolloClient({
    // Palvelinpuolella ssrMode = true, clientpuolella automaattisesti false
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      // Prefer explicit production URL; fallback to baseUrl + /graphql
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || `${baseUrl}/graphql`,
      credentials: "include",
      headers, // serverkutsuissa Next 15:s headers()
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
