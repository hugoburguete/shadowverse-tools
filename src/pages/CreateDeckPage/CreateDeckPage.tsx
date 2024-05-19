import { useMutation } from '@apollo/client';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import DeckOverview from '../../components/DeckOverview';
import { CardSimplified, Deck, DeckFormat } from '../../entities/card';
import { MUTATION_CREATE_DECK } from '../../gql/queries/deck';
import {
  addCardToDeck,
  removeCardFromDeck,
  transformDeckToCreateDeckPayload,
} from '../../lib/helpers/card';
import { getValidator } from '../../lib/validators';
import useCardDragAndDrop from './useCardDragAndDrop';

export enum ToggleableView {
  DeckOverview,
  CardLibrary,
}

export type CreateDeckProps = {};

const CreateDeckPage: React.FC<CreateDeckProps> = () => {
  const [cardPool, setCardPool] = useState<CardSimplified[]>([]);
  const [deck, setDeck] = useState<Deck>({
    format: 'standard',
    leader: null,
    deckList: [],
    evolveList: [],
  });
  const [toggledView, setToggledView] = useState<ToggleableView>(
    ToggleableView.DeckOverview
  );

  const [createDeck] = useMutation(MUTATION_CREATE_DECK);
  const navigate = useNavigate();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

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
        locallyStoreDeck(addCardToDeck(card, deck));
      }
    },
    (cardId) => locallyStoreDeck(removeCardFromDeck(cardId as string, deck))
  );

  const onFormatChange = (format: DeckFormat) => {
    setDeck({ ...getValidator({ ...deck, format }).validate() });
  };

  const locallyStoreDeck = (deck: Deck) => {
    const payload = transformDeckToCreateDeckPayload(deck);
    localStorage.setItem('temp-deck', JSON.stringify(payload));
    setDeck(deck);
  };

  const loadedCards: CardSimplified[] = cardPool
    .concat(deck.deckList)
    .concat(deck.evolveList)
    .concat(deck.leader ? [deck.leader] : []);
  const cardDragged = loadedCards.find((card) => card.cardId === cardDraggedId);

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
                  locallyStoreDeck(removeCardFromDeck(cardId, deck))
                }
              />
            </div>

            {/* Card library */}
            <div
              className={`${toggledView === ToggleableView.CardLibrary ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5 h-full`}
            >
              <CardGallery
                onCardSearch={setCardPool}
                onCardClick={(card) =>
                  locallyStoreDeck(addCardToDeck(card, deck))
                }
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

export default CreateDeckPage;
