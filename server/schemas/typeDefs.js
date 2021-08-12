const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    points: Int
    aboutMe: String
    regiments: [Regiment]
    friends: [User]
}

type Post {
    _id: ID
    text: String
    user: User
    likes: Int
    reactions: [Reaction]
}

type Auth {
    token: ID!
    user: User
  }

type Regiment {
    _id: ID
    day: String
    activity: String
    hours: String
    createdAt: String
}

type Reaction {
    _id: ID
    commentText: String
    user: User
    createdAt: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    regiments(username: String!): [Regiment]
    friends(username: String!): [User]
}

type Mutation {
    login (email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    addRegiment(day: String!, activity: String!, hours: String!, user: ID!): User
}
`;

module.exports = typeDefs;