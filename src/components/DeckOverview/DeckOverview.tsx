import { CardDragSource, Deck } from '../../entities/card';
import Droppable from '../dnd/Droppable';
import P from '../typography/Paragraph';
import CardListItem from './components/CardListItem';

export type DeckOverviewProps = {
  deck: Deck;
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck }) => {
  return (
    <div className="min-w-96 w-96 sticky top-20">
      <Droppable id={CardDragSource.DECK}>
        {/* Leader */}
        <P className="text-center">Leader</P>
        <ul>{deck.leader && <CardListItem card={deck.leader} />}</ul>
        <P className="text-center">Deck List</P>
        {/* Deck */}
        <ul>
          {deck.deckList.map((card) => (
            <CardListItem card={card} />
          ))}
        </ul>
        <P className="text-center">Evolve List</P>
        {/* Evolve deck */}
        <ul>
          {deck.evolveList.map((card) => (
            <CardListItem card={card} />
          ))}
        </ul>
      </Droppable>
    </div>
  );
};

export default DeckOverview;
