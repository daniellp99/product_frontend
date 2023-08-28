import { GraphQLClient } from "graphql-request";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT
  ? process.env.GRAPHQL_ENDPOINT
  : "http://127.0.0.1:8000/graphql/";

export const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {});
