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
  query SearchCards($searchTerm: String, $skip: Int, $take: Int) {
    searchCards(searchTerm: $searchTerm, skip: $skip, take: $take) {
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
