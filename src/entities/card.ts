export type Card = {
  cardId: string;
  name: string;
  type: string;
  class: string;
  trait?: string;
  cost?: number;
  attack?: number;
  health?: number;
  image: string;
};

export type CardWithQuantity = Card & {
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
}

export type CardDragData = {
  id: string;
  source: CardDragSource;
};
