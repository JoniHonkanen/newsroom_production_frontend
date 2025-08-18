import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
// Palvelin- ja client-puolella yhteinen funktio
export function createApolloClient(headers = {}) {
  return new ApolloClient({
    // Palvelinpuolella ssrMode = true, clientpuolella automaattisesti false
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri:
        process.env.NODE_ENV === "development"
          ? `${baseUrl}/graphql` // kehitysportti
          : "https://your-production-api/graphql", //TODO:: ADD THIS LATER
      credentials: "include",
      headers, // serverkutsuissa Next 15:s headers()
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
