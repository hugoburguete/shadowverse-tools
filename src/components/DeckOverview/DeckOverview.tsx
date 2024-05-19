import { useContext, useEffect, useMemo, useState } from 'react';
import { CardDragSource, Deck } from '../../entities/card';
import { AuthContext } from '../../state/auth';
import Button from '../Button';
import CardList from '../CardList';
import { CardClickEvent } from '../CardList/CardList';
import Droppable from '../dnd/Droppable';
import FormGroup from '../forms/FormGroup';
import Input from '../forms/Input';
import Label from '../forms/Label';
import P from '../typography/Paragraph';
import CardListItem from './components/CardListItem';

export type DeckOverviewProps = {
  deck: Deck;
  onDeckSave: (deck: Deck) => void;
  onCardClick?: CardClickEvent;
};

export type ViewType = 'list' | 'icons';

const DeckOverview: React.FC<DeckOverviewProps> = ({
  deck,
  onDeckSave,
  onCardClick,
}) => {
  const { authenticated } = useContext(AuthContext);
  const [name, setName] = useState(deck.name || 'New deck');
  const [viewType, setViewType] = useState<ViewType>('icons');
  const allCards = useMemo(() => {
    let cards = [];
    if (deck.leader) {
      cards.push(deck.leader);
    }
    return cards.concat(deck.deckList).concat(deck.evolveList);
  }, [deck]);

  const deckListCardQty = deck.deckList.reduce(
    (prev, curr) => (prev += curr.quantity),
    0
  );

  const evolveListCardQty = deck.evolveList.reduce(
    (prev, curr) => (prev += curr.quantity),
    0
  );

  useEffect(() => {
    deck.name = name;
  }, [name, deck]);

  return (
    <>
      {/* Deck customisations */}
      <div className="mb-3">
        <div className="flex justify-between items-center">
          <FormGroup className="mb-0">
            <Label>Deck name: </Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormGroup>
          {authenticated && (
            <Button onClick={() => onDeckSave(deck)}>Save deck</Button>
          )}

          {!authenticated && (
            <Button asLink to="/login">
              Login to save your deck
            </Button>
          )}
        </div>
      </div>

      <Droppable
        id={CardDragSource.DECK}
        className="border border-vulcan-800 p-3 rounded-lg"
      >
        <div className="mb-3 flex">
          <P>{deck.leader ? '1' : 'No'} leader</P>
          <P className="mx-4">|</P>
          <P>{deckListCardQty} cards</P>
          <P className="mx-4">|</P>
          <P>{evolveListCardQty} evolve cards</P>
        </div>
        {viewType === 'icons' && (
          <CardList
            className="gap-1 lg:gap-3 grid-cols-4 md:grid-cols-6"
            cards={allCards}
            source={CardDragSource.DECK}
            showQuantity
            onCardClick={onCardClick}
          />
        )}

        {viewType === 'list' && (
          <>
            {/* Leader */}
            <P className="text-center">Leader</P>
            <ul>{deck.leader && <CardListItem card={deck.leader} />}</ul>

            {/* Deck */}
            <P className="text-center">Deck List</P>
            <ul>
              {deck.deckList.map((card) => (
                <CardListItem
                  key={`desck-list-item-${card.cardId}`}
                  card={card}
                />
              ))}
            </ul>

            {/* Evolve deck */}
            <P className="text-center">Evolve List</P>
            <ul>
              {deck.evolveList.map((card) => (
                <CardListItem
                  key={`evolve-list-item-${card.cardId}`}
                  card={card}
                />
              ))}
            </ul>
          </>
        )}
      </Droppable>
    </>
  );
};

export default DeckOverview;
