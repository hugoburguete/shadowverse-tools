import { CardSimplified, Deck, DeckCard } from '../../entities/card';
import { getValidator } from '../validators';

export const LEADER_CARD_TYPES = ['Leader'];
export const EVOLVE_CARD_TYPES = ['Follower / Evolve'];

/**
 * Creates a deck card with default values.
 * @param card
 */
export const createDeckCard = (card: CardSimplified) => {
  return {
    ...card,
    quantity: 1,
    valid: true,
  };
};

/**
 * Adds a card to a deck.
 *
 * @param card The card to add
 * @param deck The current deck. @param restrictions Restrictions in the format.
 * @returns A modified version of the deck passed.
 */
export const addCardToDeck = (card: CardSimplified, deck: Deck): Deck => {
  if (LEADER_CARD_TYPES.includes(card.type)) {
    // Add leader
    deck.leader = createDeckCard(card);
  } else if (EVOLVE_CARD_TYPES.includes(card.type)) {
    // Add evolve card
    deck.evolveList = addCardToCardList(card, deck.evolveList);
  } else {
    // Add regular card
    deck.deckList = addCardToCardList(card, deck.deckList);
  }
  return getValidator(deck).validate();
};

/**
 * Adds a card to a card stack.
 * @param card @param cardList @returns
 */
const addCardToCardList = (
  card: CardSimplified,
  cardList: DeckCard[]
): DeckCard[] => {
  const index = cardList.findIndex((c) => c.cardId === card.cardId);

  if (index >= 0) {
    // Update quantity
    cardList[index].quantity += 1;
  } else {
    // Add new card
    cardList.push(createDeckCard(card));
  }

  return cardList;
};

/**
 * Removes a card from a deck.
 *
 * @param card The card to remove
 * @param deck The current deck @returns A copy of the deck passed.
 */
export const removeCardFromDeck = (cardId: string, deck: Deck): Deck => {
  if (deck.leader?.cardId === cardId) {
    // Remove leader
    deck.leader = null;
  } else {
    let card;

    card = deck.evolveList.find((evolveCard) => evolveCard.cardId === cardId);

    if (card) {
      // Remove evolve card
      deck.evolveList = removeCardFromCardList(card, deck.evolveList);
    } else {
      card = deck.deckList.find((deckCard) => deckCard.cardId === cardId);

      if (!card) {
        throw new Error("Deck doesn't contain this card");
      }

      // Add regular card
      deck.deckList = removeCardFromCardList(card, deck.deckList);
    }
  }

  return getValidator(deck).validate();
};

/**
 * Removes a card from a card stack.
 * @param card @param cardList @returns
 */
const removeCardFromCardList = (
  card: CardSimplified,
  cardList: DeckCard[]
): DeckCard[] => {
  const index = cardList.findIndex((c) => c.cardId === card.cardId);

  if (index >= 0) {
    if (cardList[index].quantity === 1) {
      // Remove card
      cardList = [...cardList.slice(0, index), ...cardList.slice(index + 1)];
    } else {
      // Update quantity
      cardList[index].quantity -= 1;
    }
  }

  return cardList;
};
