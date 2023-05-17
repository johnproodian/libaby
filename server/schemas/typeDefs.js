const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID
        username: String
        email: String
        location: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, location: Int): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
