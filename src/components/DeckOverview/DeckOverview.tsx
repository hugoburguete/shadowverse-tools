import { CardDragSource, Deck } from '../../entities/card';
import { EVOLVE_CARD_TYPES, LEADER_CARD_TYPES } from '../../lib/helpers/card';
import Droppable from '../dnd/Droppable';
import P from '../typography/Paragraph';
import CardListItem from './components/CardListItem';

export type DeckOverviewProps = {
  deck: Deck;
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck }) => {
  return (
    <div className="w-96">
      <Droppable
        id={CardDragSource.LEADER}
        data={{ accepts: LEADER_CARD_TYPES }}
      >
        {/* Leader */}
        <P className="text-center">Leader</P>
        <ul className="flex p-3">
          {deck.leader && <CardListItem card={deck.leader} />}
        </ul>
      </Droppable>

      <Droppable id={CardDragSource.DECK} data={undefined}>
        <P className="text-center">Deck List</P>
        {/* Deck */}
        <ul className="">
          {deck.deckList.map((card) => (
            <CardListItem card={card} />
          ))}
        </ul>
      </Droppable>

      <Droppable
        id={CardDragSource.EVOLVE_DECK}
        data={{ accepts: EVOLVE_CARD_TYPES }}
      >
        <P className="text-center">Evolve List</P>
        {/* Evolve deck */}
        <ul className="">
          {deck.evolveList.map((card) => (
            <CardListItem card={card} />
          ))}
        </ul>
      </Droppable>
    </div>
  );
};

export default DeckOverview;
