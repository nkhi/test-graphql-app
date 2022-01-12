const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        "Query to get tracks array for homepage grid"
        tracksForHome:[Track!]!
        track(id: ID!): Track
    }


    " A group of modules which teaches a specific topic"
    type Track { 
        id: ID!

        "title"
        title: String!
        
        "URL to the track's thumbnail"
        thumbnail: String
        
        "Length of track in episodes"
        length: Int
        
        "Number of modules in this track"
        modulesCount: Int
        
        "Author of this track"
        author: Author!

        "Desc of a track"
        description: String

        "The number of times a track has been viewed"
        numberOfViews: Int
        
        "A list of modules comprising this track"
        modules: [Module!]!
    }

    "A single unit of teaching material."
    type Module {
        id: ID!

        "name of this module"
        title: String!

        "length of this module in minutes"
        length: Int
    }

    "Author of a Track"
    type Author {
        id: ID!

        "authors name"
        name: String!

        "url of the authors name"
        photo: String
    }

    type Mutation {
        "Update the track with ID by one"
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        
        "similar to an http response"
        code: Int!

        "true if successful"
        success: Boolean!

        "an error messagge"
        message: String!

        "the updated track"
        track: Track
    }

`

module.exports = typeDefs;