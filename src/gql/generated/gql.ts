/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment CardSearchResult on Card {\n    attack\n    cardId\n    class {\n      id\n      name\n    }\n    cost\n    health\n    image\n    name\n    rarity {\n      acronym\n    }\n    trait\n    type\n  }\n": types.CardSearchResultFragmentDoc,
    "\n  query SearchCards(\n    $searchTerm: String,\n    $cost: [Int!],\n    $expansions: [Int!],\n    $classes: [Int!],\n    $types: [String!],\n    $skip: Int,\n    $take: Int,\n    $rarities: [Int!]\n  ) {\n    cards(\n      searchTerm: $searchTerm,\n      cost: $cost,\n      expansions: $expansions,\n      classes: $classes,\n      rarities: $rarities,\n      types: $types,\n      skip: $skip,\n      take: $take\n    ) {\n      ...CardSearchResult\n    }\n  }\n": types.SearchCardsDocument,
    "\n  query GetQueryData($take: Int) {\n    expansions(take: $take) {\n      id\n      name\n    }\n    rarities(take: $take) {\n      id\n      name\n    }\n    classes {\n      id\n      name\n    }\n  }\n": types.GetQueryDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CardSearchResult on Card {\n    attack\n    cardId\n    class {\n      id\n      name\n    }\n    cost\n    health\n    image\n    name\n    rarity {\n      acronym\n    }\n    trait\n    type\n  }\n"): (typeof documents)["\n  fragment CardSearchResult on Card {\n    attack\n    cardId\n    class {\n      id\n      name\n    }\n    cost\n    health\n    image\n    name\n    rarity {\n      acronym\n    }\n    trait\n    type\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchCards(\n    $searchTerm: String,\n    $cost: [Int!],\n    $expansions: [Int!],\n    $classes: [Int!],\n    $types: [String!],\n    $skip: Int,\n    $take: Int,\n    $rarities: [Int!]\n  ) {\n    cards(\n      searchTerm: $searchTerm,\n      cost: $cost,\n      expansions: $expansions,\n      classes: $classes,\n      rarities: $rarities,\n      types: $types,\n      skip: $skip,\n      take: $take\n    ) {\n      ...CardSearchResult\n    }\n  }\n"): (typeof documents)["\n  query SearchCards(\n    $searchTerm: String,\n    $cost: [Int!],\n    $expansions: [Int!],\n    $classes: [Int!],\n    $types: [String!],\n    $skip: Int,\n    $take: Int,\n    $rarities: [Int!]\n  ) {\n    cards(\n      searchTerm: $searchTerm,\n      cost: $cost,\n      expansions: $expansions,\n      classes: $classes,\n      rarities: $rarities,\n      types: $types,\n      skip: $skip,\n      take: $take\n    ) {\n      ...CardSearchResult\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetQueryData($take: Int) {\n    expansions(take: $take) {\n      id\n      name\n    }\n    rarities(take: $take) {\n      id\n      name\n    }\n    classes {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetQueryData($take: Int) {\n    expansions(take: $take) {\n      id\n      name\n    }\n    rarities(take: $take) {\n      id\n      name\n    }\n    classes {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;