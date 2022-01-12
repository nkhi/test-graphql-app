// Receive an incoming GraphQL query from our client
// Validate that query against our newly created schema
// Populate the queried schema fields with mocked data
// Return the populated fields as a response

const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI()
    };
  },
});

server.listen().then(() => {
    console.log('server is running :p');
})