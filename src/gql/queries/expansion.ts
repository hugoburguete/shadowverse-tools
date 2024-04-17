import { gql } from '../generated';

export const QUERY_GET_FILTER_DATA = gql(`
  query GetQueryData {
    expansions {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    rarities {
      id
      name
    }
    classes {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`);
