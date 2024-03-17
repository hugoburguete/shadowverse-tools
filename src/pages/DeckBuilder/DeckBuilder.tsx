import React, { useState } from 'react';
import P from '../../components/typography/Paragraph';
import { Card, CardProps } from '../../components/Card/Card';
import CardLibrary from '../../components/CardLibrary';
import Droppable from '../../components/dnd/Droppable/Droppable';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';

export type DeckBuilderProps = {};

const DeckBuilder: React.FC<DeckBuilderProps> = () => {
  const [cardDraggedId, setCardDraggedId] = useState<UniqueIdentifier | null>(
    null
  );
  const dummyCardLibrary: CardProps[] = [
    {
      cardId: 'BP01-116',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-115',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-114',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-113',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-112',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-111',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-109',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
    {
      cardId: 'BP01-110',
      image: 'https://images.shadowcard.io/images/cards/BP01-116.jpg',
      name: 'Soul Conversion',
      class: 'Abbysscraft',
      cost: 1,
      trait: 'Departed',
      type: 'Spell',
    },
  ];

  const cardDragged = dummyCardLibrary.find(
    (card) => card.cardId === cardDraggedId
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === 'droppable') {
      console.log('dropped');
    }
    setCardDraggedId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setCardDraggedId(event.active.id);
  }

  return (
    <div className="h-full">
      <P>Deck builder</P>

      <div className="flex">
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          {/* Card library */}
          <CardLibrary cards={dummyCardLibrary} />

          {/* Deck Overview */}
          <div>
            <Droppable id={'droppable'}>
              <P>Deck goes here</P>
            </Droppable>
          </div>

          <DragOverlay>{cardDragged && <Card {...cardDragged} />}</DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default DeckBuilder;
