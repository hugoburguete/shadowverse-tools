import { useMutation, useQuery } from '@apollo/client';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CardDisplay from '../../components/CardDisplay';
import CardGallery from '../../components/CardGallery';
import CardInfoModal from '../../components/CardInfoModal';
import DeckOverview from '../../components/DeckOverview';
import Loading from '../../components/Loading';
import { CardSimplified, Deck, DeckFormat } from '../../entities/card';
import { CreateDeckInput } from '../../gql/generated/graphql';
import { QUERY_GET_CARDS_BY_ID } from '../../gql/queries/card';
import { MUTATION_CREATE_DECK } from '../../gql/queries/deck';
import useDevice, { DeviceSize } from '../../hooks/useDevice';
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
export const DRAFT_DECK_LOCALSTORAGE_KEY = 'deck-draft';

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
  const [deckDraft, setDeckDraft] = useState<CreateDeckInput | null>(null);

  const { deviceSize } = useDevice();
  const { data, loading } = useQuery(QUERY_GET_CARDS_BY_ID, {
    variables: {
      ids: deckDraft?.deckCards.map((card) => card.cardId),
    },
    skip: !deckDraft,
  });
  const [createDeck] = useMutation(MUTATION_CREATE_DECK);
  const navigate = useNavigate();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Retrieve draft deck from localstorage
  useEffect(() => {
    const strDeck = localStorage.getItem(DRAFT_DECK_LOCALSTORAGE_KEY);
    if (strDeck) {
      const deck: CreateDeckInput = JSON.parse(strDeck || '{}');
      setDeckDraft(deck);
    }
  }, []);

  // Load draft deck
  useEffect(() => {
    if (data && deckDraft) {
      const newDeck = {
        name: deckDraft.name,
        format: deckDraft.format as DeckFormat,
        leader: null,
        deckList: [],
        evolveList: [],
      };

      for (const card of data.cardsById) {
        const quantity =
          deckDraft?.deckCards.find((c) => c.cardId === card.id)?.quantity || 1;

        setDeck({
          ...addCardToDeck(card, newDeck, quantity),
        });
      }
    }
  }, [data, deckDraft]);

  const saveDeck = async (newDeck: Deck) => {
    const result = await createDeck({
      variables: {
        createDeckInput: transformDeckToCreateDeckPayload(newDeck),
      },
    });

    if (!result.errors) {
      localStorage.removeItem(DRAFT_DECK_LOCALSTORAGE_KEY);
      navigate(`/deck/${result.data?.createDeck.id}`);
    }
  };

  const [cardExaminedId, setCardExaminedId] = useState<number | null>();

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

  const onAddCard = (card: CardSimplified, quantity = 1) => {
    if (deviceSize === DeviceSize.SM) {
      setCardExaminedId(card.id);
    } else {
      locallyStoreDeck(addCardToDeck(card, deck, quantity));
    }
  };

  const onRemoveCard = (cardId: string) => {
    locallyStoreDeck(removeCardFromDeck(cardId, deck));
  };

  const locallyStoreDeck = (deck: Deck) => {
    const payload = transformDeckToCreateDeckPayload(deck);
    localStorage.setItem(DRAFT_DECK_LOCALSTORAGE_KEY, JSON.stringify(payload));
    setDeck(deck);
  };

  const loadedCards: CardSimplified[] = cardPool
    .concat(deck.deckList)
    .concat(deck.evolveList)
    .concat(deck.leader ? [deck.leader] : []);
  const cardDragged = loadedCards.find((card) => card.cardId === cardDraggedId);
  const cardExamined = loadedCards.find((card) => card.id === cardExaminedId);

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
              {loading && <Loading />}

              {!loading && (
                <DeckOverview
                  deck={deck}
                  onDeckSave={saveDeck}
                  onCardClick={({ cardId }) => onRemoveCard(cardId)}
                />
              )}
            </div>

            {/* Card library */}
            <div
              className={`${toggledView === ToggleableView.CardLibrary ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5 h-full`}
            >
              <CardGallery
                onCardSearch={setCardPool}
                onInfoClick={(card) => setCardExaminedId(card.id)}
                onCardClick={(card) => onAddCard(card)}
                onFormatChange={onFormatChange}
              />
            </div>

            <DragOverlay dropAnimation={null}>
              {cardDragged && <CardDisplay card={cardDragged} />}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      {/* Card info modal */}
      <CardInfoModal
        cardExamined={cardExamined}
        onAddCard={(qty) =>
          cardExamined ? onAddCard(cardExamined, qty) : false
        }
        onRemoveCard={() =>
          cardExamined ? onRemoveCard(cardExamined.cardId) : false
        }
        deck={deck}
        onClose={() => setCardExaminedId(null)}
      />

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
