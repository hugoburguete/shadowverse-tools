import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import {
  CardDragSource,
  CardSimplified,
  DeckFormat,
} from '../../entities/card';
import { QueryCardsArgs } from '../../gql/generated/graphql';
import { QUERY_SEARCH_CARDS } from '../../gql/queries/card';
import { createDeckCard } from '../../lib/helpers/card';
import CardList from '../CardList';
import CardSearchForm from '../CardSearchForm';
import Droppable from '../dnd/Droppable';
import P from '../typography/Paragraph';

export type CardGalleryProps = {
  onCardSearch: (cards: CardSimplified[]) => void;
  onFormatChange: (format: DeckFormat) => void;
};

const CardGallery = ({ onCardSearch, onFormatChange }: CardGalleryProps) => {
  const [variables, setVariables] = useState<QueryCardsArgs>({
    searchTerm: '',
    cost: [],
    types: [],
    take: 12,
  });
  const { loading, error, data } = useQuery(QUERY_SEARCH_CARDS, { variables });
  const onSubmit = useCallback(
    (searchArgs: QueryCardsArgs) => {
      setVariables(searchArgs);
    },
    [setVariables]
  );

  useEffect(() => {
    onCardSearch(data?.cards ?? []);
  }, [data, onCardSearch]);

  const cardsForDisplay = data ? data.cards.map((c) => createDeckCard(c)) : [];

  return (
    <div className="w-full flex flex-col">
      <div className="flex">
        <CardSearchForm onSubmit={onSubmit} onFormatChange={onFormatChange} />
      </div>
      <Droppable id={CardDragSource.CARD_LIBRARY}>
        {/* TODO: Loading bar */}
        {loading && <P>Loading</P>}

        {/* TODO: Format error messages */}
        {error && <P>Error : {error.message}</P>}

        <CardList
          cards={cardsForDisplay}
          source={CardDragSource.CARD_LIBRARY}
        />
      </Droppable>
    </div>
  );
};

export default CardGallery;
