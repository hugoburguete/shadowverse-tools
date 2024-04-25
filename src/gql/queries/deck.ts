import { gql } from '../generated';

export const MUTATION_CREATE_DECK = gql(`
mutation CreateDeck($createDeckInput: CreateDeckInput!) {
  createDeck(createDeckInput: $createDeckInput) {
    id
  }
}
`);
