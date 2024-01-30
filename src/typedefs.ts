export const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    email: String!
  }

  type Document {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Mutation {
    signup(email: String!, password: String!): String!
    login(email: String!, password: String!): String!
    createDocument(title: String!, content: String!): Document!
  }

  type Query {
    documents: [String!]!
    document(title: String!): Document
  }
`;
