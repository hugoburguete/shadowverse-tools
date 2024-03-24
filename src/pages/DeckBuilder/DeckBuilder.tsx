import { useQuery } from '@apollo/client';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import React, { useState } from 'react';
import { Card } from '../../__generated__/graphql';
import CardDisplay from '../../components/CardDisplay';
import CardLibrary from '../../components/CardLibrary';
import DeckOverview from '../../components/DeckOverview';
import Heading from '../../components/typography/Heading';
import {
  CardDragData,
  CardDragSource,
  CardDropData,
  Deck,
} from '../../entities/card';
import { QUERY_GET_CARDS } from '../../gql-queries/card';
import { addCardToDeck, removeCardFromDeck } from '../../lib/helpers/card';

export type DeckBuilderProps = {};

const DeckBuilder: React.FC<DeckBuilderProps> = () => {
  const [cardDraggedId, setCardDraggedId] = useState<UniqueIdentifier | null>(
    null
  );
  const { loading, error, data } = useQuery(QUERY_GET_CARDS);
  const [deck, setDeck] = useState<Deck>({
    leader: null,
    deckList: [],
    evolveList: [],
  });

  const cardPool: Card[] = data?.getCards ?? [];
  const cardDragged = cardPool.find((card) => card.cardId === cardDraggedId);

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && cardDragged) {
      const dragData = event.active.data.current as CardDragData;
      const dropData = event.over.data.current as CardDropData;
      const target = event.over.id as CardDragSource;

      if (target !== dragData.source) {
        if (
          dropData?.accepts?.includes(dragData.type) ||
          target === CardDragSource.DECK
        ) {
          setDeck(addCardToDeck(cardDragged, deck, []));
        } else if (target === CardDragSource.CARD_LIBRARY) {
          setDeck(removeCardFromDeck(cardDragged, deck));
        }
      }
    }
    setCardDraggedId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setCardDraggedId((event.active.data.current as CardDragData).id);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="h-full">
      <Heading level={1} className="text-center">
        Deck builder
      </Heading>

      <div className="flex">
        {/* TODO: Add a pointer sensor so we can simply click the cards to add them in (https://github.com/clauderic/dnd-kit/issues/591#issuecomment-1017050816) */}
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          {/* Card library */}
          <CardLibrary cards={cardPool} />

          {/* Deck Overview */}
          <DeckOverview deck={deck} />

          <DragOverlay>
            {cardDragged && <CardDisplay card={cardDragged} />}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default DeckBuilder;
