export const graphqlURL = process.env.LOCAL
  ? "/___graphql"
  : "https://ze02ljgl.api.sanity.io/v2023-08-01/graphql/post-blog/default"

export const pathPrefix = "/Frontend" as const