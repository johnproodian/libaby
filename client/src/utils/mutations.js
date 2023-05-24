import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!, $location: Int) {
    addUser(username: $username, email: $email, password: $password, location: $location) {
      id
      username
      email
      location
    }
  }`;



