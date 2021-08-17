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
    post: [Post]
    friends: [User]
}

type Post {
    _id: ID
    textInfo: String
    userId: ID!
    likes: Int
    reactions: [Reaction]
    createdAt: String
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
    userGoals(userId: ID!): [Goal]
    userFriends(username: String!): [User]
    allPosts: [Post]
}

type Mutation {
    login (email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addFriend(friendId: ID!): User
    addGoal(day: String!, activity: String!, hours: String!, userId: ID!): Goal
    removeFriend(friendId: ID!): User
    removeGoal(goalId: ID!): User
    addPoints(pointValue: Int!, userId: ID!): User
    removePoints(pointValue: Int!, userId: ID!): User
    changeIcon(iconName: String!): User
    addPost(textInfo: String!, userId: ID!): Post
    changeAbout(aboutMe: String!): User
}
`;

module.exports = typeDefs;