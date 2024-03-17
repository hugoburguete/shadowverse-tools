import { Card } from '../../entities/card';

/**
 * Adds a card to a deck.
 *
 * @param card The card to add
 * @param deck The current deck
 * @param restrictions Restrictions in the format.
 * @returns A shallow copy of the deck passed.
 */
export const addCardToDeck = (
  card: Card,
  deck: Card[],
  restrictions: []
): Card[] => {
  // TODO: restrictions
  deck.push(card);
  return [...deck];
};

/**
 * Removes a card from a deck.
 *
 * @param card The card to remove
 * @param deck The current deck
 * @returns A copy of the deck passed.
 */
export const removeCardToDeck = (card: Card, deck: Card[]): Card[] => {
  const index = deck.findIndex((c) => c.cardId === card.cardId);
  if (index < 0) {
    throw new Error("Deck doesn't contain this card");
  }
  return [...deck.slice(0, index), ...deck.slice(index + 1)];
};
