import { CardSearchResultFragment } from '../gql/generated/graphql';

export type CardSimplified = CardSearchResultFragment;

export type CardWithQuantity = CardSimplified & {
  quantity: number;
};

export type Deck = {
  leader: CardWithQuantity | null;
  deckList: CardWithQuantity[];
  evolveList: CardWithQuantity[];
};

export enum CardDragSource {
  CARD_LIBRARY,
  DECK,
  EVOLVE_DECK,
  LEADER,
}

export type CardDragData = {
  id: string;
  source: CardDragSource;
  type: string;
};

export type CardDropData = {
  accepts?: string[];
};
