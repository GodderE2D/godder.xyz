import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export type SponsorsResponse = {
  user: {
    sponsors: {
      edges: [
        {
          node: {
            id: string;
            avatarUrl: string;
            url: string;
            name: string;
            login: string;
            sponsorshipsAsSponsor: {
              nodes: {
                createdAt: string;
                sponsorable: {
                  login: string;
                };
              }[];
            };
          };
        }
      ];
    };
  };
};

let client: ApolloClient<NormalizedCacheObject> | null = null;

if (!process.env.GITHUB_PAT) {
  console.warn("No GitHub PAT provided.");
} else {
  client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PAT}`,
    },
  });
}
export default client;
