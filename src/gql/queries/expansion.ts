import { gql } from '../generated';

export const QUERY_GET_FILTER_DATA = gql(`
  query GetQueryData($take: Int) {
    expansions(take: $take) {
      id
      name
    }
    rarities(take: $take) {
      id
      name
    }
    classes {
      id
      name
    }
  }
`);
