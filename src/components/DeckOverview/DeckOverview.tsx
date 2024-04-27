import { useMutation } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { CardDragSource, Deck } from '../../entities/card';
import { MUTATION_CREATE_DECK } from '../../gql/queries/deck';
import { transformDeckToCreateDeckPayload } from '../../lib/helpers/card';
import { AuthContext } from '../../state/auth';
import Droppable from '../dnd/Droppable';
import Input from '../forms/Input';
import P from '../typography/Paragraph';
import CardListItem from './components/CardListItem';

export type DeckOverviewProps = {
  deck: Deck;
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck }) => {
  const { authenticated } = useContext(AuthContext);
  const [name, setName] = useState('');

  const [createDeck, { loading, data, error }] =
    useMutation(MUTATION_CREATE_DECK);
  const saveDeck = () => {
    createDeck({
      variables: {
        createDeckInput: transformDeckToCreateDeckPayload(deck),
      },
    });
  };

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

      {authenticated && <button onClick={() => saveDeck()}>Save deck</button>}

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
