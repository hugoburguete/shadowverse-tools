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

export type CardSearchResultFragment = { __typename?: 'Card', attack?: number | null, cardId: string, cost?: number | null, health?: number | null, image: string, name: string, trait?: string | null, type: string, class: { __typename?: 'Class', id: number, name: string }, rarity: { __typename?: 'Rarity', acronym: string } };

export type SearchCardsQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  expansions?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  classes?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  types?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  rarities?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchCardsQuery = { __typename?: 'Query', cards: { __typename?: 'PaginatedCards', totalCount: number, edges?: Array<{ __typename?: 'CardEdge', cursor: string, node: { __typename?: 'Card', attack?: number | null, cardId: string, cost?: number | null, health?: number | null, image: string, name: string, trait?: string | null, type: string, class: { __typename?: 'Class', id: number, name: string }, rarity: { __typename?: 'Rarity', acronym: string } } }> | null, pageInfo?: { __typename?: 'CardPageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean } | null } };

export type GetQueryDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryDataQuery = { __typename?: 'Query', expansions: { __typename?: 'PaginatedExpansions', edges?: Array<{ __typename?: 'ExpansionEdge', node: { __typename?: 'Expansion', id: number, name: string } }> | null, pageInfo?: { __typename?: 'ExpansionPageInfo', hasNextPage: boolean, endCursor?: string | null } | null }, rarities: Array<{ __typename?: 'Rarity', id: number, name: string }>, classes: { __typename?: 'PaginatedClasses', edges?: Array<{ __typename?: 'ClassEdge', node: { __typename?: 'Class', id: number, name: string } }> | null, pageInfo?: { __typename?: 'ClassPageInfo', hasNextPage: boolean, endCursor?: string | null } | null } };

export const CardSearchResultFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acronym"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<CardSearchResultFragment, unknown>;
export const SearchCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expansions"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"classes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rarities"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"expansions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expansions"}}},{"kind":"Argument","name":{"kind":"Name","value":"classes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"classes"}}},{"kind":"Argument","name":{"kind":"Name","value":"rarities"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rarities"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSearchResult"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acronym"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<SearchCardsQuery, SearchCardsQueryVariables>;
export const GetQueryDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQueryData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expansions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rarities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetQueryDataQuery, GetQueryDataQueryVariables>;