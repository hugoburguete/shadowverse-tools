import { DndContext, DragOverlay } from '@dnd-kit/core';
import React, { useState } from 'react';
import { Card } from '../../__generated__/graphql';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import DeckOverview from '../../components/DeckOverview';
import Heading from '../../components/typography/Heading';
import { Deck } from '../../entities/card';
import { addCardToDeck, removeCardFromDeck } from '../../lib/helpers/card';
import useCardDragAndDrop from './useCardDragAndDrop';

export type DeckBuilderProps = {};

const DeckBuilder: React.FC<DeckBuilderProps> = () => {
  const [cardPool, setCardPool] = useState<Card[]>([]);
  const [deck, setDeck] = useState<Deck>({
    leader: null,
    deckList: [],
    evolveList: [],
  });

  const { handleDragEnd, handleDragStart, cardDraggedId } = useCardDragAndDrop(
    (cardId) => {
      const card = cardPool.find((card) => card.cardId === cardId);
      if (card) {
        setDeck(addCardToDeck(card, deck, []));
      }
    },
    (cardId) => {
      const card = cardPool.find((card) => card.cardId === cardId);
      if (card) {
        setDeck(removeCardFromDeck(card, deck));
      }
    }
  );

  const cardDragged = cardPool.find((card) => card.cardId === cardDraggedId);

  return (
    <div className="h-full">
      <Heading level={1} className="text-center">
        Deck builder
      </Heading>

      <div className="flex">
        {/* TODO: Add a pointer sensor so we can simply click the cards to add them in (https://github.com/clauderic/dnd-kit/issues/591#issuecomment-1017050816) */}
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          {/* Card library */}
          <CardGallery onCardSearch={setCardPool} />

          {/* Deck Overview */}
          <DeckOverview deck={deck} />

          <DragOverlay dropAnimation={null}>
            {cardDragged && <CardDisplay card={cardDragged} />}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default DeckBuilder;
