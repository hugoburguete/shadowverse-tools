import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import React, { useState } from 'react';
import CardDisplay from '../../components/CardDisplay';
import CardLibrary from '../../components/CardLibrary';
import DeckOverview from '../../components/DeckOverview';
import Heading from '../../components/typography/Heading';
import {
  Card,
  CardDragData,
  CardDragSource,
  CardDropData,
  Deck,
} from '../../entities/card';
import { addCardToDeck, removeCardFromDeck } from '../../lib/helpers/card';

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
    if (event.over && cardDragged) {
      const dragData = event.active.data.current as CardDragData;
      const dropData = event.over.data.current as CardDropData;
      const target = event.over.id as CardDragSource;

      console.log(
        target,
        dragData.source,
        target === CardDragSource.CARD_LIBRARY
      );

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
