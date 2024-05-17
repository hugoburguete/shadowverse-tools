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
    "\n  fragment CardSearchResult on Card {\n    id\n    attack\n    cardId\n    class {\n      id\n      name\n    }\n    cost\n    health\n    image\n    name\n    rarity {\n      acronym\n    }\n    trait\n    type\n  }\n": types.CardSearchResultFragmentDoc,
    "\n  query SearchCards(\n    $searchTerm: String,\n    $cost: [Int!],\n    $expansions: [Int!],\n    $classes: [Int!],\n    $types: [String!],\n    $rarities: [Int!],\n    $after: String,\n  ) {\n    cards(\n      searchTerm: $searchTerm,\n      cost: $cost,\n      expansions: $expansions,\n      classes: $classes,\n      rarities: $rarities,\n      types: $types,\n      after: $after,\n    ) {\n      edges {\n        cursor\n        node {\n          ...CardSearchResult\n        }\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.SearchCardsDocument,
    "\nmutation CreateDeck($createDeckInput: CreateDeckInput!) {\n  createDeck(createDeckInput: $createDeckInput) {\n    id\n  }\n}\n": types.CreateDeckDocument,
    "\nmutation UpdateDeck($id: Int!, $input: CreateDeckInput!) {\n  updateDeck(id: $id, input: $input) {\n    status\n  }\n}\n": types.UpdateDeckDocument,
    "\nquery GetUserDecks {\n  decks {\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n      startCursor\n    }\n    edges {\n    \tcursor\n      node {\n        id\n        name  \n      }\n    }\n  }\n}\n": types.GetUserDecksDocument,
    "\nquery GetDeck(\n  $id: Int!\n) {\n  deck(id: $id) {\n    cards {\n      ...CardSearchResult\n    }\n    cardsInfo {\n      cardId\n      quantity\n    }\n    name\n    format\n    id\n    name\n  }\n}\n": types.GetDeckDocument,
    "\n  query GetQueryData {\n    expansions {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n    rarities {\n      id\n      name\n    }\n    classes {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetQueryDataDocument,
    "\nmutation RegisterUser($registerInput: RegisterInput!) {\n  register(registerInput: $registerInput) {\n    accessToken\n    refreshToken\n  }\n}\n": types.RegisterUserDocument,
    "\nmutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n  }\n}\n": types.LoginDocument,
    "\nmutation RefreshToken($refreshToken: String!) {\n  refreshToken(refreshToken: $refreshToken) {\n    accessToken\n    refreshToken\n  }\n}\n": types.RefreshTokenDocument,
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
export function gql(source: "\n  fragment CardSearchResult on Card {\n    id\n    attack\n    cardId\n    class {\n      id\n      name\n    }\n    cost\n    health\n    image\n    name\n    rarity {\n      acronym\n    }\n    trait\n    type\n  }\n"): (typeof documents)["\n  fragment CardSearchResult on Card {\n    id\n    attack\n    cardId\n    class {\n      id\n      name\n    }\n    cost\n    health\n    image\n    name\n    rarity {\n      acronym\n    }\n    trait\n    type\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchCards(\n    $searchTerm: String,\n    $cost: [Int!],\n    $expansions: [Int!],\n    $classes: [Int!],\n    $types: [String!],\n    $rarities: [Int!],\n    $after: String,\n  ) {\n    cards(\n      searchTerm: $searchTerm,\n      cost: $cost,\n      expansions: $expansions,\n      classes: $classes,\n      rarities: $rarities,\n      types: $types,\n      after: $after,\n    ) {\n      edges {\n        cursor\n        node {\n          ...CardSearchResult\n        }\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchCards(\n    $searchTerm: String,\n    $cost: [Int!],\n    $expansions: [Int!],\n    $classes: [Int!],\n    $types: [String!],\n    $rarities: [Int!],\n    $after: String,\n  ) {\n    cards(\n      searchTerm: $searchTerm,\n      cost: $cost,\n      expansions: $expansions,\n      classes: $classes,\n      rarities: $rarities,\n      types: $types,\n      after: $after,\n    ) {\n      edges {\n        cursor\n        node {\n          ...CardSearchResult\n        }\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateDeck($createDeckInput: CreateDeckInput!) {\n  createDeck(createDeckInput: $createDeckInput) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation CreateDeck($createDeckInput: CreateDeckInput!) {\n  createDeck(createDeckInput: $createDeckInput) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateDeck($id: Int!, $input: CreateDeckInput!) {\n  updateDeck(id: $id, input: $input) {\n    status\n  }\n}\n"): (typeof documents)["\nmutation UpdateDeck($id: Int!, $input: CreateDeckInput!) {\n  updateDeck(id: $id, input: $input) {\n    status\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetUserDecks {\n  decks {\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n      startCursor\n    }\n    edges {\n    \tcursor\n      node {\n        id\n        name  \n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetUserDecks {\n  decks {\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n      startCursor\n    }\n    edges {\n    \tcursor\n      node {\n        id\n        name  \n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetDeck(\n  $id: Int!\n) {\n  deck(id: $id) {\n    cards {\n      ...CardSearchResult\n    }\n    cardsInfo {\n      cardId\n      quantity\n    }\n    name\n    format\n    id\n    name\n  }\n}\n"): (typeof documents)["\nquery GetDeck(\n  $id: Int!\n) {\n  deck(id: $id) {\n    cards {\n      ...CardSearchResult\n    }\n    cardsInfo {\n      cardId\n      quantity\n    }\n    name\n    format\n    id\n    name\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetQueryData {\n    expansions {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n    rarities {\n      id\n      name\n    }\n    classes {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetQueryData {\n    expansions {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n    rarities {\n      id\n      name\n    }\n    classes {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RegisterUser($registerInput: RegisterInput!) {\n  register(registerInput: $registerInput) {\n    accessToken\n    refreshToken\n  }\n}\n"): (typeof documents)["\nmutation RegisterUser($registerInput: RegisterInput!) {\n  register(registerInput: $registerInput) {\n    accessToken\n    refreshToken\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n  }\n}\n"): (typeof documents)["\nmutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RefreshToken($refreshToken: String!) {\n  refreshToken(refreshToken: $refreshToken) {\n    accessToken\n    refreshToken\n  }\n}\n"): (typeof documents)["\nmutation RefreshToken($refreshToken: String!) {\n  refreshToken(refreshToken: $refreshToken) {\n    accessToken\n    refreshToken\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;