import { CardDragSource, Deck } from '../../entities/card';
import { EVOLVE_CARD_TYPES, LEADER_CARD_TYPES } from '../../lib/helpers/card';
import CardList from '../CardList';
import Droppable from '../dnd/Droppable';
import Heading from '../typography/Heading';

export type DeckOverviewProps = {
  deck: Deck;
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck }) => {
  return (
    <div className="w-full">
      <Droppable
        id={CardDragSource.LEADER}
        data={{ accepts: LEADER_CARD_TYPES }}
      >
        {/* Leader */}
        <Heading level={2} className="text-center">
          Leader
        </Heading>
        <div className="flex p-3">
          {!deck.leader && <div style={{ paddingTop: '140%' }}>dummy</div>}
          <div className="mx-auto w-1/6">
            {deck.leader && (
              <CardList cards={[deck.leader]} source={CardDragSource.LEADER} />
            )}
          </div>
        </div>
      </Droppable>

      <Droppable id={CardDragSource.DECK} data={undefined}>
        <Heading level={2} className="text-center">
          Deck List
        </Heading>
        {/* Deck */}
        <div className="grid grid-cols-6 gap-3 p-3">
          {!deck.deckList.length && (
            <div style={{ paddingTop: '140%' }}>dummy</div>
          )}
          {deck.deckList.length > 0 && (
            <CardList
              cards={deck.deckList}
              source={CardDragSource.DECK}
              showQuantity
            />
          )}
        </div>
      </Droppable>

      <Droppable
        id={CardDragSource.EVOLVE_DECK}
        data={{ accepts: EVOLVE_CARD_TYPES }}
      >
        <Heading level={2} className="text-center">
          Evolve List
        </Heading>
        {/* Evolve deck */}
        <div className="grid grid-cols-6 gap-3 p-3">
          {!deck.evolveList.length && (
            <div style={{ paddingTop: '140%' }}>dummy</div>
          )}
          {deck.evolveList.length > 0 && (
            <CardList
              cards={deck.evolveList}
              source={CardDragSource.EVOLVE_DECK}
              showQuantity
            />
          )}
        </div>
      </Droppable>
    </div>
  );
};

export default DeckOverview;
