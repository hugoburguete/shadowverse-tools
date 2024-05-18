import { useMutation } from '@apollo/client';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import DeckOverview from '../../components/DeckOverview';
import Heading from '../../components/typography/Heading';
import { CardSimplified, Deck, DeckFormat } from '../../entities/card';
import { MUTATION_CREATE_DECK } from '../../gql/queries/deck';
import {
  addCardToDeck,
  removeCardFromDeck,
  transformDeckToCreateDeckPayload,
} from '../../lib/helpers/card';
import { getValidator } from '../../lib/validators';
import useCardDragAndDrop from './useCardDragAndDrop';

export type CreateDeckProps = {};

const CreateDeckPage: React.FC<CreateDeckProps> = () => {
  const [cardPool, setCardPool] = useState<CardSimplified[]>([]);
  const [deck, setDeck] = useState<Deck>({
    format: 'standard',
    leader: null,
    deckList: [],
    evolveList: [],
  });

  const [createDeck] = useMutation(MUTATION_CREATE_DECK);
  const navigate = useNavigate();

  const saveDeck = async (newDeck: Deck) => {
    const result = await createDeck({
      variables: {
        createDeckInput: transformDeckToCreateDeckPayload(newDeck),
      },
    });

    if (!result.errors) {
      navigate(`/deck/${result.data?.createDeck.id}`);
    }
  };

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
      <Heading level={1} className="text-center">
        Deck builder
      </Heading>

      <div className="flex items-start">
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          {/* Card library */}
          <div className="w-full">
            <CardGallery
              onCardSearch={setCardPool}
              onFormatChange={onFormatChange}
            />
          </div>

          {/* Deck Overview */}
          <DeckOverview deck={deck} onDeckSave={saveDeck} />

          <DragOverlay dropAnimation={null}>
            {cardDragged && <CardDisplay card={cardDragged} />}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default CreateDeckPage;
