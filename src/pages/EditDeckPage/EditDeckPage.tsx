import { useMutation } from '@apollo/client';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import DeckOverview from '../../components/DeckOverview';
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
import { ToggleableView } from '../CreateDeckPage/CreateDeckPage';
import useCardDragAndDrop from '../CreateDeckPage/useCardDragAndDrop';

const EditDeckPage = (): JSX.Element => {
  const [cardPool, setCardPool] = useState<CardSimplified[]>([]);
  const deckData = useLoaderData() as GetDeckQuery;
  const { deckId } = useParams();
  const [deck, setDeck] = useState<Deck>(transformDeckQueryToDeck(deckData));
  const [toggledView, setToggledView] = useState<ToggleableView>(
    ToggleableView.DeckOverview
  );
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

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
    <div className="h-full relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="md:flex items-start gap-3 h-full">
          <DndContext
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            sensors={sensors}
          >
            {/* Deck Overview */}
            <div
              className={`${toggledView === ToggleableView.DeckOverview ? 'block' : 'hidden'} md:block mb-3 md:w-1/2 lg:w-3/5`}
            >
              <DeckOverview
                deck={deck}
                onDeckSave={saveDeck}
                onCardClick={({ cardId }) =>
                  setDeck(removeCardFromDeck(cardId, deck))
                }
              />
            </div>

            {/* Card library */}
            <div
              className={`${toggledView === ToggleableView.CardLibrary ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5 h-full`}
            >
              <CardGallery
                onCardSearch={setCardPool}
                onCardClick={(card) => setDeck(addCardToDeck(card, deck))}
                onFormatChange={onFormatChange}
              />
            </div>

            <DragOverlay dropAnimation={null}>
              {cardDragged && <CardDisplay card={cardDragged} />}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      {/* View toggler for mobile users */}
      <div className="fixed bottom-0 left-0 right-0 flex md:hidden bg-vulcan-900">
        <Button
          className="rounded-none w-1/2"
          onClick={() => setToggledView(ToggleableView.DeckOverview)}
        >
          Deck
        </Button>
        <Button
          className="rounded-none w-1/2"
          onClick={() => setToggledView(ToggleableView.CardLibrary)}
        >
          Card search
        </Button>
      </div>
    </div>
  );
};

export default EditDeckPage;
