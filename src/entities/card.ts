export type Card = {
  cardId: string;
  name: string;
  type: string;
  class: string;
  trait: string;
  cost: number;
  attack?: number;
  health?: number;
  image: string;
};

export enum CardDragSource {
  CARD_LIBRARY,
  DECK,
}

export type CardDragData = {
  id: string;
  source: CardDragSource;
};
