import { useMutation } from '@apollo/client';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import DeckOverview from '../../components/DeckOverview';
import Heading from '../../components/typography/Heading';
import { CardSimplified, Deck, DeckFormat } from '../../entities/card';
import { GetDeckQuery } from '../../gql/generated/graphql';
import { MUTATION_UPDATE_DECK } from '../../gql/queries/deck';
import {
  addCardToDeck,
  removeCardFromDeck,
  transformDeckQueryToDeck,
  transformDeckToCreateDeckPayload,
} from '../../lib/helpers/card';
import { getValidator } from '../../lib/validators';
import useCardDragAndDrop from '../CreateDeckPage/useCardDragAndDrop';

const EditDeckPage = (): JSX.Element => {
  const [cardPool, setCardPool] = useState<CardSimplified[]>([]);
  const deckData = useLoaderData() as GetDeckQuery;
  const { deckId } = useParams();
  const [deck, setDeck] = useState<Deck>(transformDeckQueryToDeck(deckData));

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

  const [updateDeck] = useMutation(MUTATION_UPDATE_DECK);

  const saveDeck = (newDeck: Deck) => {
    updateDeck({
      variables: {
        id: parseInt(deckId || '0'),
        input: transformDeckToCreateDeckPayload(newDeck),
      },
    });
  };

  const cardDragged = cardPool.find((card) => card.cardId === cardDraggedId);

  return (
    <div className="min-h-full">
      <div className="flex items-start">
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
          <DeckOverview deck={deck} onDeckSave={saveDeck} />

          <DragOverlay dropAnimation={null}>
            {cardDragged && <CardDisplay card={cardDragged} />}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default EditDeckPage;
