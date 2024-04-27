import { CardSimplified } from '../../src/entities/card';

export const makeCard = (overrides?: Partial<CardSimplified>) => {
  return {
    id: 1,
    cardId: 'BP01-LD10',
    image: 'https://images.shadowcard.io/images/cards/BP01-LD10.jpg',
    name: 'Urias',
    class: {
      id: 1,
      name: 'Abysscraft',
    },
    type: 'Leader',
    rarity: { acronym: 'LG' },
    ...overrides,
  };
};
