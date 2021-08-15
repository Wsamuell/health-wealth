import gql from 'graphql-tag';

export const GET_ME = gql`
query me{
    me {
      username
      email
      _id
      regimens {
        day
        activity
        hours
      }
    } 
}
`;

export const QUERY_USERS = gql`
query users{
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
query user($username:String!) {
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
