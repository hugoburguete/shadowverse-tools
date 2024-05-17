import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import {
  CardDragSource,
  CardSimplified,
  DeckCard,
  DeckFormat,
} from '../../entities/card';
import { QueryCardsArgs, SearchCardsQuery } from '../../gql/generated/graphql';
import { QUERY_SEARCH_CARDS } from '../../gql/queries/card';
import { createDeckCard } from '../../lib/helpers/card';
import CardList from '../CardList';
import CardSearchForm from '../CardSearchForm';
import Loading from '../Loading';
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
  });
  const { loading, error, data, fetchMore } = useQuery(QUERY_SEARCH_CARDS, {
    variables,
  });
  const [refetching, setRefetching] = useState(false);
  const [cardsForDisplay, setCardsForDisplay] = useState<DeckCard[]>([]);
  const onSubmit = useCallback(
    (searchArgs: QueryCardsArgs) => {
      setVariables(searchArgs);
    },
    [setVariables]
  );

  const getCardsFromData = (
    data: SearchCardsQuery | undefined
  ): CardSimplified[] => {
    if (!data || !data.cards.edges) {
      return [];
    }

    return data.cards.edges.map((edge) => edge.node);
  };

  useEffect(() => {
    onCardSearch(getCardsFromData(data));
  }, [data, onCardSearch]);

  // Apply infinite load
  useEffect(() => {
    const loadMore = () => {
      const amountScrolled =
        window.innerHeight + document.documentElement.scrollTop;
      const scrollThreshold =
        (document.scrollingElement?.scrollHeight || 0) - 100;
      const canFetchMore = !refetching && data?.cards.pageInfo?.hasNextPage;

      if (amountScrolled >= scrollThreshold && canFetchMore) {
        // Set a flag to indicate we're fetching more
        setRefetching(true);

        // Fetch more
        fetchMore({
          variables: {
            after: data?.cards.pageInfo?.endCursor,
          },
        }).then(() => setRefetching(false));
      }
    };

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [fetchMore, refetching, setRefetching, data]);

  useEffect(() => {
    setCardsForDisplay(
      getCardsFromData(data).map((card) => createDeckCard(card))
    );
  }, [data, setCardsForDisplay]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex">
        <CardSearchForm onSubmit={onSubmit} onFormatChange={onFormatChange} />
      </div>
      <Droppable id={CardDragSource.CARD_LIBRARY}>
        {loading && <Loading />}

        {/* TODO: Format error messages */}
        {error && <P>Error : {error.message}</P>}

        <CardList
          cards={cardsForDisplay || []}
          source={CardDragSource.CARD_LIBRARY}
        />
      </Droppable>
    </div>
  );
};

export default CardGallery;
