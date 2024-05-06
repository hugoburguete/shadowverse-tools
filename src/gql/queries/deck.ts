import { gql } from '../generated';

export const MUTATION_CREATE_DECK = gql(`
mutation CreateDeck($createDeckInput: CreateDeckInput!) {
  createDeck(createDeckInput: $createDeckInput) {
    id
  }
}
`);

export const MUTATION_UPDATE_DECK = gql(`
mutation UpdateDeck($id: Int!, $input: CreateDeckInput!) {
  updateDeck(id: $id, input: $input) {
    status
  }
}
`);

export const QUERY_GET_DECK = gql(`
query GetDeck(
  $id: Int!
) {
  deck(id: $id) {
    cards {
      ...CardSearchResult
    }
    cardsInfo {
      cardId
      quantity
    }
    name
    format
    id
    name
  }
}
`);
