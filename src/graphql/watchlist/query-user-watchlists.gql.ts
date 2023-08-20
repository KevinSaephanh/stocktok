import { gql } from 'urql';

export const queryUserWatchlists = gql`
  query watchlist($userId: ID!) {
    userWatchlists(id: $userId) {
      id
      name
      stocks
      createdAt
      updatedAt
    }
  }
`;
