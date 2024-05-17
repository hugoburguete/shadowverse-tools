import { useContext, useEffect, useState } from 'react';
import { CardDragSource, Deck } from '../../entities/card';
import { AuthContext } from '../../state/auth';
import Droppable from '../dnd/Droppable';
import Input from '../forms/Input';
import P from '../typography/Paragraph';
import CardListItem from './components/CardListItem';

export type DeckOverviewProps = {
  deck: Deck;
  onDeckSave: (deck: Deck) => void;
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck, onDeckSave }) => {
  const { authenticated } = useContext(AuthContext);
  const [name, setName] = useState(deck.name || '');

  useEffect(() => {
    deck.name = name;
  }, [name, deck]);

  return (
    <div className="min-w-96 w-96 sticky top-20">
      <Input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      {authenticated && (
        <button onClick={() => onDeckSave(deck)}>Save deck</button>
      )}

      {!authenticated && <a href="/login">Login to save your deck</a>}
      <Droppable id={CardDragSource.DECK}>
        {/* Leader */}
        <P className="text-center">Leader</P>
        <ul>{deck.leader && <CardListItem card={deck.leader} />}</ul>

        {/* Deck */}
        <P className="text-center">Deck List</P>
        <ul>
          {deck.deckList.map((card) => (
            <CardListItem key={`desck-list-item-${card.cardId}`} card={card} />
          ))}
        </ul>

        {/* Evolve deck */}
        <P className="text-center">Evolve List</P>
        <ul>
          {deck.evolveList.map((card) => (
            <CardListItem key={`evolve-list-item-${card.cardId}`} card={card} />
          ))}
        </ul>
      </Droppable>
    </div>
  );
};

export default DeckOverview;
