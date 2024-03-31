import { gql } from '../generated';

export const QUERY_GET_EXPANSIONS = gql(`
  query GetExpansions($take: Int) {
    expansions(take: $take) {
      id
      name
    }
  }
`);
