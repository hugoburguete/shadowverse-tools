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
  const [listType, setListType] = useState<ViewType>('icons');
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
      <div className="mb-3 text-center">
        <div className="md:flex justify-between items-center">
          <FormGroup className="mb-0">
            <Label className="text-nowrap">Deck name: </Label>
            <Input
              className="w-full"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormGroup>
          {authenticated && (
            <Button className="mt-3 md:mt-0" onClick={() => onDeckSave(deck)}>
              Save deck
            </Button>
          )}

          {!authenticated && (
            <Button className="mt-3 md:mt-0" asLink to="/login">
              Login to save
            </Button>
          )}
        </div>
      </div>

      <Droppable
        id={CardDragSource.DECK}
        className="border border-vulcan-800 p-3 rounded-lg"
      >
        {/* Card quantities */}
        <P className="mb-3 flex">
          {deck.leader ? '1' : 'No'} leader{' '}
          <span className="mx-2 md:mx-4">|</span>
          {deckListCardQty} cards
          <span className="mx-2 md:mx-4">|</span>
          {evolveListCardQty} evolve cards
        </P>

        {/* Card List (icons) */}
        {listType === 'icons' && (
          <CardList
            className="gap-2 xs:gap-3 grid-cols-3 xs:grid-cols-4 lg:grid-cols-6"
            cards={allCards}
            source={CardDragSource.DECK}
            showQuantity
            onCardClick={onCardClick}
          />
        )}

        {/* Card List (list) */}
        {listType === 'list' && (
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
