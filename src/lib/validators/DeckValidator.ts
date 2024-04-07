import { Deck } from '../../entities/card';

export type CardQuantityRestriction = {
  cardId: string;
  quantity: number;
};

export abstract class DeckValidator {
  constructor(protected deck: Deck) {}

  /**
   * Validates the cards within a deck by setting each cards valid flag.
   *
   * @param deck
   */
  abstract validate(): Deck;
}
