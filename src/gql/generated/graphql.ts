/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Card = {
  __typename?: 'Card';
  attack?: Maybe<Scalars['Int']['output']>;
  cardId: Scalars['String']['output'];
  class: Class;
  classId: Scalars['Int']['output'];
  cost?: Maybe<Scalars['Int']['output']>;
  expansion: Expansion;
  expansionId: Scalars['Int']['output'];
  health?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rarity: Rarity;
  rarityId: Scalars['Int']['output'];
  trait?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CardEdge = {
  __typename?: 'CardEdge';
  cursor: Scalars['String']['output'];
  node: Card;
};

export type CardPageInfo = {
  __typename?: 'CardPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Class = {
  __typename?: 'Class';
  /** The class identifier. */
  id: Scalars['Int']['output'];
  /** The class name. */
  name: Scalars['String']['output'];
  /** The class slug. */
  slug: Scalars['String']['output'];
};

export type ClassEdge = {
  __typename?: 'ClassEdge';
  cursor: Scalars['String']['output'];
  node: Class;
};

export type ClassPageInfo = {
  __typename?: 'ClassPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type CreateDeckInput = {
  /** The cards this deck contains. */
  deckCards: Array<DeckCardInput>;
  /** The game format this deck belongs to. */
  format: Scalars['String']['input'];
  /** The deck name. The deck name should be 3 to 30 characters long. */
  name: Scalars['String']['input'];
};

/** A Shadowverse evolve deck consisting of 1 leader, 40 to 50 main deck cards and up to 10 evolve cards */
export type Deck = {
  __typename?: 'Deck';
  /** The cards this deck contains. */
  cards: Array<Card>;
  /** The cards with quantity. */
  cardsInfo: Array<DeckCard>;
  /** The game format this deck belongs to. The current deck formats supported are: standard and gloryfinder. */
  format: Scalars['String']['output'];
  /** The deck identifier. */
  id: Scalars['Int']['output'];
  /** The deck name. */
  name: Scalars['String']['output'];
};

export type DeckCard = {
  __typename?: 'DeckCard';
  cardId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type DeckCardInput = {
  cardId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type DeckEdge = {
  __typename?: 'DeckEdge';
  cursor: Scalars['String']['output'];
  node: Deck;
};

export type DeckPageInfo = {
  __typename?: 'DeckPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Expansion = {
  __typename?: 'Expansion';
  /** The cards within this expansion. */
  cards: Array<Card>;
  /** The expansion identifier. */
  id: Scalars['Int']['output'];
  /** The expansion name. */
  name: Scalars['String']['output'];
  /** The date the expansion was released. */
  releaseDate: Scalars['DateTime']['output'];
  /** The expansion slug. */
  slug: Scalars['String']['output'];
};

export type ExpansionEdge = {
  __typename?: 'ExpansionEdge';
  cursor: Scalars['String']['output'];
  node: Expansion;
};

export type ExpansionPageInfo = {
  __typename?: 'ExpansionPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a deck for the logged in user. */
  createDeck: Deck;
  login: LoginResponse;
  refreshToken: LoginResponse;
  register: LoginResponse;
  /** Removes a user deck. */
  removeDeck: RemoveOutput;
  /** Updates a user deck. */
  updateDeck: UpdateOutput;
};


export type MutationCreateDeckArgs = {
  createDeckInput: CreateDeckInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveDeckArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateDeckArgs = {
  id: Scalars['Int']['input'];
  input: CreateDeckInput;
};

/** Result for filtered cards. */
export type PaginatedCards = {
  __typename?: 'PaginatedCards';
  edges?: Maybe<Array<CardEdge>>;
  pageInfo?: Maybe<CardPageInfo>;
  totalCount: Scalars['Int']['output'];
};

/** Result for filtered classes. */
export type PaginatedClasses = {
  __typename?: 'PaginatedClasses';
  edges?: Maybe<Array<ClassEdge>>;
  pageInfo?: Maybe<ClassPageInfo>;
  totalCount: Scalars['Int']['output'];
};

/** Paginated fetch result for decks. */
export type PaginatedDecks = {
  __typename?: 'PaginatedDecks';
  edges?: Maybe<Array<DeckEdge>>;
  pageInfo?: Maybe<DeckPageInfo>;
  totalCount: Scalars['Int']['output'];
};

/** Result for filtered expansions. */
export type PaginatedExpansions = {
  __typename?: 'PaginatedExpansions';
  edges?: Maybe<Array<ExpansionEdge>>;
  pageInfo?: Maybe<ExpansionPageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  cards: PaginatedCards;
  class: Class;
  classes: PaginatedClasses;
  /** Finds a deck. */
  deck: Deck;
  /** Finds all user decks. */
  decks: PaginatedDecks;
  expansion: Expansion;
  expansions: PaginatedExpansions;
  rarities: Array<Rarity>;
};


export type QueryCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  classes?: Array<Scalars['Int']['input']>;
  cost?: Array<Scalars['Int']['input']>;
  expansions?: Array<Scalars['Int']['input']>;
  rarities?: Array<Scalars['Int']['input']>;
  searchTerm?: Scalars['String']['input'];
  types?: Array<Scalars['String']['input']>;
};


export type QueryClassArgs = {
  id: Scalars['Int']['input'];
};


export type QueryClassesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDeckArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDecksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExpansionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryExpansionsArgs = {
  ids?: Array<Scalars['Int']['input']>;
  slugs?: Array<Scalars['String']['input']>;
};

export type Rarity = {
  __typename?: 'Rarity';
  /** The rarity acronym. */
  acronym: Scalars['String']['output'];
  /** The rarity identifier. */
  id: Scalars['Int']['output'];
  /** The rarity name. */
  name: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RemoveOutput = {
  __typename?: 'RemoveOutput';
  status: Scalars['String']['output'];
};

export type UpdateOutput = {
  __typename?: 'UpdateOutput';
  status: Scalars['String']['output'];
};

export type CardSearchResultFragment = { __typename?: 'Card', id: number, attack?: number | null, cardId: string, cost?: number | null, health?: number | null, image: string, name: string, trait?: string | null, type: string, class: { __typename?: 'Class', id: number, name: string }, rarity: { __typename?: 'Rarity', acronym: string } };

export type SearchCardsQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  expansions?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  classes?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  types?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  rarities?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchCardsQuery = { __typename?: 'Query', cards: { __typename?: 'PaginatedCards', totalCount: number, edges?: Array<{ __typename?: 'CardEdge', cursor: string, node: { __typename?: 'Card', id: number, attack?: number | null, cardId: string, cost?: number | null, health?: number | null, image: string, name: string, trait?: string | null, type: string, class: { __typename?: 'Class', id: number, name: string }, rarity: { __typename?: 'Rarity', acronym: string } } }> | null, pageInfo?: { __typename?: 'CardPageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean } | null } };

export type CreateDeckMutationVariables = Exact<{
  createDeckInput: CreateDeckInput;
}>;


export type CreateDeckMutation = { __typename?: 'Mutation', createDeck: { __typename?: 'Deck', id: number } };

export type UpdateDeckMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: CreateDeckInput;
}>;


export type UpdateDeckMutation = { __typename?: 'Mutation', updateDeck: { __typename?: 'UpdateOutput', status: string } };

export type GetUserDecksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDecksQuery = { __typename?: 'Query', decks: { __typename?: 'PaginatedDecks', totalCount: number, pageInfo?: { __typename?: 'DeckPageInfo', endCursor?: string | null, hasNextPage: boolean, startCursor?: string | null } | null, edges?: Array<{ __typename?: 'DeckEdge', cursor: string, node: { __typename?: 'Deck', id: number, name: string } }> | null } };

export type GetDeckQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetDeckQuery = { __typename?: 'Query', deck: { __typename?: 'Deck', name: string, format: string, id: number, cards: Array<{ __typename?: 'Card', id: number, attack?: number | null, cardId: string, cost?: number | null, health?: number | null, image: string, name: string, trait?: string | null, type: string, class: { __typename?: 'Class', id: number, name: string }, rarity: { __typename?: 'Rarity', acronym: string } }>, cardsInfo: Array<{ __typename?: 'DeckCard', cardId: number, quantity: number }> } };

export type GetQueryDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryDataQuery = { __typename?: 'Query', expansions: { __typename?: 'PaginatedExpansions', edges?: Array<{ __typename?: 'ExpansionEdge', node: { __typename?: 'Expansion', id: number, name: string } }> | null, pageInfo?: { __typename?: 'ExpansionPageInfo', hasNextPage: boolean, endCursor?: string | null } | null }, rarities: Array<{ __typename?: 'Rarity', id: number, name: string }>, classes: { __typename?: 'PaginatedClasses', edges?: Array<{ __typename?: 'ClassEdge', node: { __typename?: 'Class', id: number, name: string } }> | null, pageInfo?: { __typename?: 'ClassPageInfo', hasNextPage: boolean, endCursor?: string | null } | null } };

export type RegisterUserMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string } };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string } };

export const CardSearchResultFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acronym"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<CardSearchResultFragment, unknown>;
export const SearchCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expansions"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"classes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rarities"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"expansions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expansions"}}},{"kind":"Argument","name":{"kind":"Name","value":"classes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"classes"}}},{"kind":"Argument","name":{"kind":"Name","value":"rarities"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rarities"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSearchResult"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acronym"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<SearchCardsQuery, SearchCardsQueryVariables>;
export const CreateDeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDeck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createDeckInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDeckInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDeck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createDeckInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createDeckInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateDeckMutation, CreateDeckMutationVariables>;
export const UpdateDeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDeck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDeckInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDeck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateDeckMutation, UpdateDeckMutationVariables>;
export const GetUserDecksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserDecks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserDecksQuery, GetUserDecksQueryVariables>;
export const GetDeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDeck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSearchResult"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardsInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acronym"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<GetDeckQuery, GetDeckQueryVariables>;
export const GetQueryDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQueryData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expansions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rarities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetQueryDataQuery, GetQueryDataQueryVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;