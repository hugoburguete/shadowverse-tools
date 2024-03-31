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
  class: Scalars['String']['output'];
  cost?: Maybe<Scalars['Int']['output']>;
  expansion: Expansion;
  expansionId: Scalars['Int']['output'];
  health?: Maybe<Scalars['Int']['output']>;
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rarity?: Maybe<Scalars['String']['output']>;
  trait?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
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

export type Query = {
  __typename?: 'Query';
  cards: Array<Card>;
  expansion: Expansion;
  expansions: Array<Expansion>;
};


export type QueryCardsArgs = {
  cost?: Array<Scalars['Int']['input']>;
  expansions?: Array<Scalars['Int']['input']>;
  searchTerm?: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  types?: Array<Scalars['String']['input']>;
};


export type QueryExpansionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryExpansionsArgs = {
  ids?: Array<Scalars['Int']['input']>;
  skip?: Scalars['Int']['input'];
  slugs?: Array<Scalars['String']['input']>;
  take?: Scalars['Int']['input'];
};

export type CardSearchResultFragment = { __typename?: 'Card', attack?: number | null, cardId: string, class: string, cost?: number | null, health?: number | null, image: string, name: string, rarity?: string | null, trait?: string | null, type: string };

export type SearchCardsQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  expansions?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  types?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchCardsQuery = { __typename?: 'Query', cards: Array<{ __typename?: 'Card', attack?: number | null, cardId: string, class: string, cost?: number | null, health?: number | null, image: string, name: string, rarity?: string | null, trait?: string | null, type: string }> };

export type GetExpansionsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetExpansionsQuery = { __typename?: 'Query', expansions: Array<{ __typename?: 'Expansion', id: number, name: string }> };

export const CardSearchResultFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<CardSearchResultFragment, unknown>;
export const SearchCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expansions"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"expansions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expansions"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSearchResult"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<SearchCardsQuery, SearchCardsQueryVariables>;
export const GetExpansionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExpansions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expansions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetExpansionsQuery, GetExpansionsQueryVariables>;