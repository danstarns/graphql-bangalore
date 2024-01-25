import { ProxyAdapter } from "@graphql-debugger/adapter-proxy";
import {
  traceSchema,
  GraphQLDebuggerContext,
} from "@graphql-debugger/trace-schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      throw new Error("Hello");
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const adapter = new ProxyAdapter();

const tracedSchema = traceSchema({
  schema,
  adapter,
});

const yoga = createYoga({
  schema: tracedSchema,
  context: (req) => {
    return {
      GraphQLDebuggerContext: new GraphQLDebuggerContext(),
    };
  },
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
