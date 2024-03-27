import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Card, QuerySearchCardsArgs } from '../../__generated__/graphql';
import { CardDragSource } from '../../entities/card';
import { QUERY_SEARCH_CARDS } from '../../gql-queries/card';
import CardList from '../CardList';
import CardSearchForm from '../CardSearchForm';
import Droppable from '../dnd/Droppable';
import P from '../typography/Paragraph';

export type CardLibraryProps = {
  onCardSearch: (cards: Card[]) => void;
};

const CardLibrary = ({ onCardSearch }: CardLibraryProps) => {
  const [variables, setVariables] = useState<QuerySearchCardsArgs>({
    searchTerm: '',
  });
  const { loading, error, data } = useQuery(QUERY_SEARCH_CARDS, { variables });
  const onSubmit = (searchArgs: QuerySearchCardsArgs) => {
    setVariables(searchArgs);
  };

  useEffect(() => {
    onCardSearch(data?.searchCards ?? []);
  }, [data, onCardSearch]);

  // TODO: Error message
  if (error) return <p>Error : {error.message}</p>;
  const cardsForDisplay = data?.searchCards
    ? data.searchCards.map((c) => ({ ...c, quantity: 1 }))
    : [];

  return (
    <div className="flex flex-col">
      <CardSearchForm onSubmit={onSubmit} />
      <Droppable id={CardDragSource.CARD_LIBRARY}>
        {/* TODO: Loading bar */}
        {loading && <P>Loading</P>}

        <div className="grid grid-cols-2 w-96 gap-3 p-3 overflow-y-scroll">
          <CardList
            cards={cardsForDisplay}
            source={CardDragSource.CARD_LIBRARY}
          />
        </div>
      </Droppable>
    </div>
  );
};

export default CardLibrary;
