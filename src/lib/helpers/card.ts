import {
  CardSimplified,
  Deck,
  DeckCard,
  DeckFormat,
} from '../../entities/card';
import {
  CreateDeckInput,
  DeckCardInput,
  GetDeckQuery,
} from '../../gql/generated/graphql';
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
    let card = deck.evolveList.find(
      (evolveCard) => evolveCard.cardId === cardId
    );

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

export const transformDeckToCreateDeckPayload = (
  deck: Deck
): CreateDeckInput => {
  const { format, name } = deck;
  const cardMapper = (card: DeckCard) => {
    return {
      cardId: card.id,
      quantity: card.quantity,
    };
  };
  const deckCards: DeckCardInput[] = deck.deckList
    .map(cardMapper)
    .concat(deck.evolveList.map(cardMapper));
  deckCards.push(cardMapper(deck.leader as DeckCard));

  return {
    format,
    name: name as string,
    deckCards,
  };
};

export const transformDeckQueryToDeck = ({ deck }: GetDeckQuery): Deck => {
  let leader: DeckCard | null = null;
  const deckList: DeckCard[] = [];
  const evolveList: DeckCard[] = [];

  for (let i = 0; i < deck.cards.length; i++) {
    const card = { ...deck.cards[i] } as DeckCard;
    card.quantity =
      deck.cardsInfo.find((info) => info.cardId === card.id)?.quantity || 0;

    if (LEADER_CARD_TYPES.includes(card.type)) {
      leader = card;
    } else if (EVOLVE_CARD_TYPES.includes(card.type)) {
      evolveList.push(card);
    } else {
      deckList.push(card);
    }
  }

  return {
    name: deck.name,
    format: deck.format as DeckFormat,
    leader,
    deckList,
    evolveList,
  };
};
