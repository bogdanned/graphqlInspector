const { ApolloServer, gql } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    name: String
    isReal: Boolean
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    name: () => 'Miky Mouse'
  },
};

module.exports =  makeExecutableSchema({
  typeDefs,
  resolvers,
});
