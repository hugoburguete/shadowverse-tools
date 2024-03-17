import { Card, CardDragSource, Deck } from '../../entities/card';
import CardList from '../CardList';
import Droppable from '../dnd/Droppable';
import P from '../typography/Paragraph';

export type DeckOverviewProps = {
  deck: Deck;
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck }) => {
  return (
    <div>
      <Droppable id={CardDragSource.DECK}>
        {/* Leader */}
        <div className="grid grid-cols-6 gap-3 p-3 h-full">
          {deck.leader && (
            <CardList cards={[deck.leader]} source={CardDragSource.DECK} />
          )}
        </div>

        {/* Deck */}
        <div className="grid grid-cols-6 gap-3 p-3 h-full">
          {deck.deckList.length > 0 && (
            <CardList
              cards={deck.deckList}
              source={CardDragSource.DECK}
              showQuantity
            />
          )}
        </div>

        {/* Evolve deck */}
        <div className="grid grid-cols-6 gap-3 p-3 h-full">
          {deck.evolveList.length > 0 && (
            <CardList
              cards={deck.evolveList}
              source={CardDragSource.DECK}
              showQuantity
            />
          )}
        </div>
      </Droppable>
    </div>
  );
};

export default DeckOverview;
