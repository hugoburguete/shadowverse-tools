import { gql } from '../__generated__';

export const QUERY_GET_CARDS = gql(`
  query GetCards {
    getCards {
      attack
      cardId
      class
      cost
      health
      image
      name
      rarity
      trait
      type
    }
  }
`);

export const QUERY_SEARCH_CARDS = gql(`
  query SearchCards($searchTerm: String, $cost: [Int!], $types: [String!], $skip: Int, $take: Int) {
    searchCards(searchTerm: $searchTerm, cost: $cost, types: $types, skip: $skip, take: $take) {
      attack
      cardId
      class
      cost
      health
      image
      name
      rarity
      trait
      type
    }
  }
`);
