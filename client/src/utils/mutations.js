import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!, $username: String!) {
        addUser(email: $email, password: $password, username: $username) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_GOAL = gql`
mutation addGoal($day: String!, $activity: String!, $hours: String! $userId: ID!) {
    addGoal(day: $day, activity: $activity, hours: $hours, userId: $userId) {
      day
      activity
      hours
      _id
    }
  }
`;

export const ADD_FRIEND = gql`
mutation addFriend($id: ID!) {
  addFriend(friendId: $id) {
      _id
      username
      friends {
          _id
          username
      }
  }
}
`;

export const REMOVE_FRIEND = gql`
mutation removeFriend($id: ID!) {
  removeFriend(friendId: $id) {
      _id
  username
  friends {
            _id
            username
          }
  
    }
}
`;

export const REMOVE_USER = gql`
mutation removeUser($userId: ID!){
    removeUser(userId: $userId){
      username
    }
  }
`;

export const REMOVE_GOAL = gql`
mutation removeGoal($goalId: ID!) {
    removeGoal(goalId: $goalId){
      regimens {
        activity
      }
    }
  }
`;

export const ADD_POINTS = gql`
mutation addPoints($pointValue: Int!, $userId: ID!){
    addPoints(pointValue: $pointValue, userId: $userId){
      username
      points
    }
  }
`;

export const REMOVE_POINTS = gql`
mutation removePoints($pointValue: Int!, $userId: ID!) {
    removePoints(pointValue: $pointValue, userId: $userId) {
      points
    }
  }

`;