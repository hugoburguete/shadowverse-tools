import { FieldPolicy, FieldReadFunction } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { PaginatedCards } from '../generated/graphql';

type TypePolicyField = {
  [fieldName: string]:
    | FieldPolicy<PaginatedCards, PaginatedCards>
    | FieldReadFunction<PaginatedCards>;
};

export const searchCardsQueryTypePolicy = () => {
  return {
    cards: relayStylePagination([
      'classes',
      'cost',
      'expansions',
      'rarities',
      'searchTerm',
      'types',
    ]),
    // { keyArgs: false,

    //   merge(existing, incoming, { readField }) { const merged = existing &&
    //     existing.edges ? existing.edges.slice(0) : [];

    //     return merged;
    //   },
    // },
  };
};
