import { DndContext, DragOverlay } from '@dnd-kit/core';
import React, { useState } from 'react';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import DeckOverview from '../../components/DeckOverview';
import Heading from '../../components/typography/Heading';
import { CardSimplified, Deck, DeckFormat } from '../../entities/card';
import { addCardToDeck, removeCardFromDeck } from '../../lib/helpers/card';
import { getValidator } from '../../lib/validators';
import useCardDragAndDrop from './useCardDragAndDrop';

export type DeckBuilderProps = {};

const DeckBuilder: React.FC<DeckBuilderProps> = () => {
  const [cardPool, setCardPool] = useState<CardSimplified[]>([]);
  const [deck, setDeck] = useState<Deck>({
    format: 'standard',
    leader: null,
    deckList: [],
    evolveList: [],
  });

  const { handleDragEnd, handleDragStart, cardDraggedId } = useCardDragAndDrop(
    (cardId) => {
      const card = cardPool.find((card) => card.cardId === cardId);
      if (card) {
        setDeck(addCardToDeck(card, deck));
      }
    },
    (cardId) => setDeck(removeCardFromDeck(cardId as string, deck))
  );

  const onFormatChange = (format: DeckFormat) => {
    setDeck({ ...getValidator({ ...deck, format }).validate() });
  };

  const cardDragged = cardPool.find((card) => card.cardId === cardDraggedId);

  return (
    <div className="min-h-full">
      <div className="flex items-start">
        {/* TODO: Add a pointer sensor so we can simply click the cards to add them in (https://github.com/clauderic/dnd-kit/issues/591#issuecomment-1017050816) */}
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          {/* Card library */}
          <div className="w-full">
            <Heading level={1} className="text-center">
              Deck builder
            </Heading>

            <CardGallery
              onCardSearch={setCardPool}
              onFormatChange={onFormatChange}
            />
          </div>

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
