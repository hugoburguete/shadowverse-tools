import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { CardDragData, CardDragSource } from '../../entities/card';

type CardMoveEvent = (cardId: string) => void;

const useCardDragAndDrop = (
  onAddCardToDeck: CardMoveEvent,
  onRemoveCardFromDeck: CardMoveEvent
) => {
  const [cardDraggedId, setCardDraggedId] = useState<string | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    // Are we dragging a card?
    if (event.over && cardDraggedId) {
      const dragData = event.active.data.current as CardDragData;
      const target = event.over.id as CardDragSource;

      // Is the droppable area valid?
      if (target !== dragData.source) {
        if (target === CardDragSource.DECK) {
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
