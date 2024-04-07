import { Deck, DeckCard } from '../../entities/card';
import { DeckValidator } from './DeckValidator';

export class GloryfinderDeckValidator extends DeckValidator {
  validate(): Deck {
    for (let idx = 0; idx < this.deck.deckList.length; idx++) {
      const card = this.deck.deckList[idx];

      if (!this.cardHasValidQuantity(card)) {
        this.deck.deckList[idx].valid = false;
        continue;
      }

      this.deck.deckList[idx].valid = true;
    }

    for (let idx = 0; idx < this.deck.evolveList.length; idx++) {
      const card = this.deck.evolveList[idx];

      if (!this.cardHasValidQuantity(card)) {
        this.deck.evolveList[idx].valid = false;
        continue;
      }

      this.deck.evolveList[idx].valid = true;
    }

    return { ...this.deck };
  }

  /**
   * Perform quantity restriction checks on a card.
   *
   * @param card
   * @returns
   */
  private cardHasValidQuantity = (card: DeckCard): boolean => {
    if (card.quantity > 1) {
      return false;
    }

    return true;
  };
}
