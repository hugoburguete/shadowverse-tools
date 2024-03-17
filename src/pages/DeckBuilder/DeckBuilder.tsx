import React, { useState } from 'react';
import P from '../../components/typography/Paragraph';
import CardDisplay from '../../components/CardDisplay';
import CardLibrary from '../../components/CardLibrary';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import DeckOverview from '../../components/DeckOverview';
import { Card, CardDragSource, CardDragData } from '../../entities/card';
import { addCardToDeck, removeCardToDeck } from '../../lib/helpers/card';
import Heading from '../../components/typography/Heading';

export type DeckBuilderProps = {};

const DeckBuilder: React.FC<DeckBuilderProps> = () => {
  const [cardDraggedId, setCardDraggedId] = useState<UniqueIdentifier | null>(
    null
  );
  const [deck, setDeck] = useState<Card[]>([]);
  const cardPool: Card[] = [
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

  const cardDragged = cardPool.find((card) => card.cardId === cardDraggedId);

  function handleDragEnd(event: DragEndEvent) {
    const { source } = event.active.data.current as CardDragData;
    if (event.over && cardDragged && event.over.id !== source) {
      const target = event.over.id as CardDragSource;
      if (target === CardDragSource.DECK) {
        setDeck(addCardToDeck(cardDragged, deck, []));
      } else if (target === CardDragSource.CARD_LIBRARY) {
        setDeck(removeCardToDeck(cardDragged, deck));
      }
    }
    setCardDraggedId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setCardDraggedId((event.active.data.current as CardDragData).id);
  }

  return (
    <div className="h-full">
      <Heading level={1} className="mx-auto">
        Deck builder
      </Heading>

      <div className="flex">
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
