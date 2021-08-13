const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    points: Int
    aboutMe: String
    regimens: [Goal]
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

type Goal {
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
    userGoals(userId: String!): [Goal]
    userFriends(username: String!): [User]
    allPosts: [Post]
}

type Mutation {
    login (email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!, user: String!): User
    addGoal(day: String!, activity: String!, hours: String!, userId: ID!): Goal
    removeFriend(friendId: ID!): User
    removeGoal(goalId: ID!): User
}
`;

module.exports = typeDefs;