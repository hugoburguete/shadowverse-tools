import { gql } from '../generated';

export const FRAGMENT_SEARCH_CARDS = gql(`
  fragment CardSearchResult on Card {
    id
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
    $rarities: [Int!],
    $after: String,
  ) {
    cards(
      searchTerm: $searchTerm,
      cost: $cost,
      expansions: $expansions,
      classes: $classes,
      rarities: $rarities,
      types: $types,
      after: $after,
    ) {
      edges {
        cursor
        node {
          ...CardSearchResult
        }
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`);
