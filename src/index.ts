import { ProxyAdapter } from "@graphql-debugger/adapter-proxy";
import {
  traceSchema,
  GraphQLDebuggerContext,
} from "@graphql-debugger/trace-schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createYoga } from "graphql-yoga";
import express from "express";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

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
      userid: req.request.headers.get("userid"),
      GraphQLDebuggerContext: new GraphQLDebuggerContext(),
    };
  },
});

const app = express();
app.use(express.json());
app.use("/graphql", yoga);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
