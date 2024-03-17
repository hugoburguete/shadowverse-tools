import { Card, CardWithQuantity, Deck } from '../../entities/card';

const LEADER_TYPES = ['Leader'];
const EVOLVE_TYPES = ['Follower / Evolved'];

/**
 * Adds a card to a deck.
 *
 * @param card The card to add
 * @param deck The current deck
 * @param restrictions Restrictions in the format.
 * @returns A modified version of the deck passed.
 */
export const addCardToDeck = (
  card: Card,
  deck: Deck,
  restrictions: []
): Deck => {
  // TODO: restrictions
  if (LEADER_TYPES.includes(card.type)) {
    // Add leader
    deck.leader = { ...card, quantity: 1 };
  } else if (EVOLVE_TYPES.includes(card.type)) {
    // Add evolve card
    deck.evolveList = addCardToCardList(card, deck.evolveList);
  } else {
    // Add regular card
    deck.deckList = addCardToCardList(card, deck.deckList);
  }
  return deck;
};

/**
 * Adds a card to a card stack.
 * @param card
 * @param cardList
 * @returns
 */
const addCardToCardList = (
  card: Card,
  cardList: CardWithQuantity[]
): CardWithQuantity[] => {
  const index = cardList.findIndex((c) => c.cardId === card.cardId);

  if (index >= 0) {
    // Update quantity
    cardList[index].quantity += 1;
  } else {
    // Add new card
    cardList.push({
      ...card,
      quantity: 1,
    });
  }

  return cardList;
};

/**
 * Removes a card from a deck.
 *
 * @param card The card to remove
 * @param deck The current deck
 * @returns A copy of the deck passed.
 */
export const removeCardFromDeck = (card: Card, deck: Deck): Deck => {
  if (LEADER_TYPES.includes(card.type)) {
    // Remove leader
    deck.leader = null;
  } else if (EVOLVE_TYPES.includes(card.type)) {
    // Remove evolve card
    deck.deckList = removeCardFromCardList(card, deck.evolveList);
  } else {
    // Add regular card
    deck.deckList = removeCardFromCardList(card, deck.deckList);
  }

  return deck;
};

/**
 * Removes a card from a card stack.
 * @param card
 * @param cardList
 * @returns
 */
const removeCardFromCardList = (
  card: Card,
  cardList: CardWithQuantity[]
): CardWithQuantity[] => {
  const index = cardList.findIndex((c) => c.cardId === card.cardId);

  if (index >= 0) {
    if (cardList[index].quantity === 1) {
      // Remove card
      cardList = [...cardList.slice(0, index), ...cardList.slice(index + 1)];
    } else {
      // Update quantity
      cardList[index].quantity -= 1;
    }
  } else {
    throw new Error("Deck doesn't contain this card");
  }

  return cardList;
};
