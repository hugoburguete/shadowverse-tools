import { gql } from '../generated';

export const FRAGMENT_SEARCH_CARDS = gql(`
  fragment CardSearchResult on Card {
    attack
    cardId
    class {
      id
      name
    }
    cost
    health
    image
    name
    rarity {
      acronym
    }
    trait
    type
  }
`);

export const QUERY_SEARCH_CARDS = gql(`
  query SearchCards(
    $searchTerm: String,
    $cost: [Int!],
    $expansions: [Int!],
    $classes: [Int!],
    $types: [String!],
    $skip: Int,
    $take: Int,
    $rarities: [Int!]
  ) {
    cards(
      searchTerm: $searchTerm,
      cost: $cost,
      expansions: $expansions,
      classes: $classes,
      rarities: $rarities,
      types: $types,
      skip: $skip,
      take: $take
    ) {
      ...CardSearchResult
    }
  }
`);
