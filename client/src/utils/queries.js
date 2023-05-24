import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query Query {
        users {
            id
            username
            email
            location
        }
    }
`;