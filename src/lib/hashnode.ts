const HASHNODE_ENDPOINT = "https://gql.hashnode.com/";

const POSTS_QUERY = /* GraphQL */ `
  query LatestPosts($host: String!) {
    publication(host: $host) {
      posts(first: 10) {
        edges {
          node {
            title
            brief
            slug
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  url: string;
  coverImage?: { url: string } | null;
}

interface HashnodeRawPost {
  title: string;
  brief: string;
  slug: string;
  coverImage?: { url: string } | null;
}

interface HashnodeResponse {
  data?: {
    publication?: {
      posts?: {
        edges: Array<{ node: HashnodeRawPost }>;
      };
    };
  };
  errors?: Array<{ message: string }>;
}

/**
 * Fetch the latest Hashnode posts for a publication, on the server, with
 * 1-hour ISR caching. Tag the request so callers can call
 * `revalidateTag("hashnode-posts:<host>")` to force-refresh.
 */
export async function getHashnodePosts(host: string): Promise<HashnodePost[]> {
  try {
    const res = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: POSTS_QUERY,
        variables: { host },
      }),
      next: {
        revalidate: 3600,
        tags: ["hashnode-posts", `hashnode-posts:${host}`],
      },
    });

    if (!res.ok) {
      console.error(
        `[hashnode] ${host} request failed: ${res.status} ${res.statusText}`,
      );
      return [];
    }

    const json = (await res.json()) as HashnodeResponse;
    if (json.errors?.length) {
      console.error(`[hashnode] ${host} graphql errors:`, json.errors);
      return [];
    }

    return (
      json.data?.publication?.posts?.edges.map(({ node }) => ({
        ...node,
        url: `https://${host}/${node.slug}`,
      })) ?? []
    );
  } catch (error) {
    console.error(`[hashnode] ${host} fetch threw:`, error);
    return [];
  }
}
