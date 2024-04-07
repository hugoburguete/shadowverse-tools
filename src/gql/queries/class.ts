import { gql } from '../generated';

export const QUERY_GET_CLASSES = gql(`
  query GetClasses() {
    classes() {
      id
      name
    }
  }
`);
