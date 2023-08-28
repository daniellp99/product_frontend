import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: process.env.GRAPHQL_ENDPOINT
    ? process.env.GRAPHQL_ENDPOINT
    : "http://127.0.0.1:8000/graphql/",
  documents: ["schema.graphql", "src/**/*.tsx"],
};

export default config;
