import { Card, CardDragSource } from '../../entities/card';
import CardList from '../CardList';
import Droppable from '../dnd/Droppable';
import P from '../typography/Paragraph';

export type DeckOverviewProps = {
  deck: Card[];
};

const DeckOverview: React.FC<DeckOverviewProps> = ({ deck }) => {
  const cardsForDisplay = deck
    // Add quantities
    .map((c) => ({
      ...c,
      quantity: deck.filter((c2) => c2.cardId === c.cardId).length,
    }))
    // Get unique values
    .filter(
      (c, i) => deck.findIndex(({ cardId }) => cardId === c.cardId) === i
    );

  return (
    <div>
      <Droppable id={CardDragSource.DECK}>
        {/* No cards to display */}
        {!deck.length && <P>No cards in your deck list</P>}

        {/* Deck list */}
        {deck.length > 0 && (
          <CardList
            cards={cardsForDisplay}
            source={CardDragSource.DECK}
            showQuantity
          />
        )}
      </Droppable>
    </div>
  );
};

export default DeckOverview;
