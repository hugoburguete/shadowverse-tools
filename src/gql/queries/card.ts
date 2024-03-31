import { gql } from '../generated';

export const FRAGMENT_SEARCH_CARDS = gql(`
  fragment CardSearchResult on Card {
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
`);

export const QUERY_SEARCH_CARDS = gql(`
  query SearchCards($searchTerm: String, $cost: [Int!], $expansions: [Int!], $types: [String!], $skip: Int, $take: Int) {
    cards(searchTerm: $searchTerm, cost: $cost, expansions: $expansions, types: $types, skip: $skip, take: $take) {
      ...CardSearchResult
    }
  }
`);