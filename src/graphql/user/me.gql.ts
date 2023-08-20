import { gql } from 'urql';

export const me = gql`
  query {
    id
    email
    username
    password
    avatar
    isActive
    role
    Role
    watchlists
  }
`;
