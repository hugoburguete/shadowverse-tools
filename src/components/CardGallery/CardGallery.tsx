import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useRef, useState } from 'react';
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
import { CardClickEvent } from '../CardList/CardList';
import CardSearchForm from '../CardSearchForm';
import ErrorList from '../ErrorList';
import Loading from '../Loading';
import Droppable from '../dnd/Droppable';

export type CardGalleryProps = {
  onCardSearch: (cards: CardSimplified[]) => void;
  onFormatChange: (format: DeckFormat) => void;
  onCardClick?: CardClickEvent;
  onInfoClick?: CardClickEvent;
};

const CardGallery = ({
  onCardSearch,
  onFormatChange,
  onCardClick,
  onInfoClick,
}: CardGalleryProps) => {
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
  const containerRef = useRef<HTMLDivElement>(null);

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
    // FIXME: I broke this.
    const div = containerRef.current;
    if (!div) {
      return;
    }

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

    div.addEventListener('scroll', loadMore);

    return () => div.removeEventListener('scroll', loadMore);
  }, [fetchMore, refetching, setRefetching, data, containerRef]);

  useEffect(() => {
    setCardsForDisplay(
      getCardsFromData(data).map((card) => createDeckCard(card))
    );
  }, [data, setCardsForDisplay]);

  return (
    <div
      className="h-full border border-vulcan-800 p-3 rounded-lg flex flex-col overflow-auto"
      ref={containerRef}
    >
      <div className="flex">
        <CardSearchForm onSubmit={onSubmit} onFormatChange={onFormatChange} />
      </div>
      <Droppable id={CardDragSource.CARD_LIBRARY}>
        {loading && <Loading />}

        {error && <ErrorList errors={[error.message]} />}

        <CardList
          showInfoIcon
          className="grid-cols-3 md:grid-cols-4 gap-2"
          cards={cardsForDisplay || []}
          source={CardDragSource.CARD_LIBRARY}
          onCardClick={onCardClick}
          onInfoClick={onInfoClick}
        />
      </Droppable>
    </div>
  );
};

export default CardGallery;
