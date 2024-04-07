import { Deck, DeckCard } from '../../entities/card';
import { CardQuantityRestriction, DeckValidator } from './DeckValidator';

export class StandardDeckValidator extends DeckValidator {
  private quantityRestrictions: CardQuantityRestriction[] = [
    // Shen long
    {
      cardId: 'BP01-086',
      quantity: 1,
    },

    // Uma mussume restrictions
    {
      cardId: 'CP01-021',
      quantity: 1,
    },
    {
      cardId: 'CP01-069',
      quantity: 1,
    },
  ];

  validate(): Deck {
    for (let idx = 0; idx < this.deck.deckList.length; idx++) {
      const card = this.deck.deckList[idx];

      if (!this.cardIsValid(card)) {
        this.deck.deckList[idx].valid = false;
        continue;
      }

      this.deck.deckList[idx].valid = true;
    }

    for (let idx = 0; idx < this.deck.evolveList.length; idx++) {
      const card = this.deck.evolveList[idx];

      if (!this.cardIsValid(card)) {
        this.deck.evolveList[idx].valid = false;
        continue;
      }

      this.deck.evolveList[idx].valid = true;
    }

    return { ...this.deck };
  }

  /**
   * Perform all validity checks on a card.
   *
   * @param card
   * @param deck @returns
   */
  private cardIsValid = (card: DeckCard) => {
    return this.cardHasValidClass(card) && this.cardHasValidQuantity(card);
  };

  /**
   * Perform quantity restriction checks on a card.
   *
   * @param card
   * @returns
   */
  private cardHasValidQuantity = (card: DeckCard): boolean => {
    if (card.quantity > 3) {
      return false;
    }

    const quantityRestriction = this.quantityRestrictions.find(
      (restrict) => restrict.cardId === card.cardId
    );
    if (quantityRestriction && card.quantity > quantityRestriction?.quantity) {
      return false;
    }

    return true;
  };

  /**
   * Perform class restriction checks on a card.
   *
   * @param card
   * @param deck @returns
   */
  private cardHasValidClass = (card: DeckCard): boolean => {
    let classId = this.deck.leader?.class.id;

    // TODO: Remove hardcoded value
    if (
      card.class.name === 'Neutral' ||
      (classId && classId !== card.class.id)
    ) {
      return false;
    }

    return true;
  };
}
