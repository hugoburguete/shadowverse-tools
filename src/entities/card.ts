import { CardSearchResultFragment } from '../gql/generated/graphql';

export type CardSimplified = CardSearchResultFragment;
export type DeckFormat = 'standard' | 'gloryfinder';

export type DeckCard = CardSimplified & {
  quantity: number;
  valid: boolean;
};

export type Deck = {
  name?: string;
  format: DeckFormat;
  leader: DeckCard | null;
  deckList: DeckCard[];
  evolveList: DeckCard[];
};

export enum CardDragSource {
  CARD_LIBRARY,
  DECK,
}

export type CardDragData = {
  id: string;
  source: CardDragSource;
  type: string;
};

export type CardDropData = {};
