import React, { useState } from 'react';
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
import { Card, CardDragSource, CardDragData, Deck } from '../../entities/card';
import { addCardToDeck, removeCardFromDeck } from '../../lib/helpers/card';
import Heading from '../../components/typography/Heading';

export type DeckBuilderProps = {};

const DeckBuilder: React.FC<DeckBuilderProps> = () => {
  const [cardDraggedId, setCardDraggedId] = useState<UniqueIdentifier | null>(
    null
  );
  const [deck, setDeck] = useState<Deck>({
    leader: null,
    deckList: [],
    evolveList: [],
  });
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
      cardId: 'BP01-LD10',
      image: 'https://images.shadowcard.io/images/cards/BP01-LD10.jpg',
      name: 'Urias',
      class: 'Abbysscraft',
      type: 'Leader',
    },
    {
      cardId: 'CP01-028',
      image: 'https://images.shadowcard.io/images/cards/CP01-028.jpg',
      name: 'Agnes Tachyon (Evolved)',
      class: 'Runecraft',
      trait: 'Umamusume',
      type: 'Follower / Evolved',
      attack: 3,
      health: 3,
    },
    {
      cardId: 'BP03-023',
      image: 'https://images.shadowcard.io/images/cards/BP03-023.jpg',
      name: 'Amerro, Spear Knight',
      class: 'Swordcraft',
      cost: 2,
      trait: 'Officer / Heroic',
      type: 'Follower',
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
        setDeck(removeCardFromDeck(cardDragged, deck));
      }
    }
    setCardDraggedId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setCardDraggedId((event.active.data.current as CardDragData).id);
  }

  return (
    <div className="h-full">
      <Heading level={1} className="text-center">
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
