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
