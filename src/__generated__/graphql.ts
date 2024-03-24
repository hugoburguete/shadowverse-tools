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
};

export type Card = {
  __typename?: 'Card';
  attack?: Maybe<Scalars['Int']['output']>;
  cardId: Scalars['String']['output'];
  class: Scalars['String']['output'];
  cost?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rarity: Scalars['String']['output'];
  trait?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCards: Array<Card>;
  searchCards: Array<Card>;
};


export type QuerySearchCardsArgs = {
  searchTerm?: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type GetCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCardsQuery = { __typename?: 'Query', getCards: Array<{ __typename?: 'Card', attack?: number | null, cardId: string, class: string, cost?: number | null, health?: number | null, image: string, name: string, rarity: string, trait?: string | null, type: string }> };


export const GetCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attack"}},{"kind":"Field","name":{"kind":"Name","value":"cardId"}},{"kind":"Field","name":{"kind":"Name","value":"class"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GetCardsQuery, GetCardsQueryVariables>;