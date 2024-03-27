import { DragEndEvent, DragStartEvent, UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';
import {
  CardDragData,
  CardDragSource,
  CardDropData,
} from '../../entities/card';

type CardMoveEvent = (cardId: UniqueIdentifier | null) => void;

const useCardDragAndDrop = (
  onAddCardToDeck: CardMoveEvent,
  onRemoveCardFromDeck: CardMoveEvent
) => {
  const [cardDraggedId, setCardDraggedId] = useState<UniqueIdentifier | null>(
    null
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && cardDraggedId) {
      const dragData = event.active.data.current as CardDragData;
      const dropData = event.over.data.current as CardDropData;
      const target = event.over.id as CardDragSource;

      if (target !== dragData.source) {
        if (
          dropData?.accepts?.includes(dragData.type) ||
          target === CardDragSource.DECK
        ) {
          onAddCardToDeck(cardDraggedId);
        } else if (target === CardDragSource.CARD_LIBRARY) {
          onRemoveCardFromDeck(cardDraggedId);
        }
      }
    }
    setCardDraggedId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setCardDraggedId((event.active.data.current as CardDragData).id);
  }

  return { handleDragEnd, handleDragStart, cardDraggedId };
};

export default useCardDragAndDrop;
