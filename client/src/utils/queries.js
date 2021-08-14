import gql from 'graphql-tag';

export const QUERY_ME = gql`
query {
    me {
      username
      email
      _id
    } 
}
`;

export const QUERY_USERS = gql`
query {
    users {
      username
      email
      _id
      points
      regimens {
        activity
        hours
        day
        _id
      }
      friends {
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
query($username:String!) {
    user (username: $username){
      username
      email
      _id
      regimens {
        day 
        activity
      }
      friends {
        username
      }
    }
  }
`;
