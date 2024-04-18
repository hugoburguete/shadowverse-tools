import { relayStylePagination } from '@apollo/client/utilities';

export const searchCardsQueryField = () => {
  return {
    cards: relayStylePagination([
      'classes',
      'cost',
      'expansions',
      'rarities',
      'searchTerm',
      'types',
    ]),
  };
};
