import { Card, CardDragSource } from '../../entities/card';
import CardList from '../CardList';
import Droppable from '../dnd/Droppable';

export type CardLibraryProps = {
  cards: Card[];
};

const CardLibrary = ({ cards }: CardLibraryProps) => {
  const cardsForDisplay = cards.map((c) => ({ ...c, quantity: 1 }));

  return (
    <Droppable id={CardDragSource.CARD_LIBRARY}>
      <div className="grid grid-cols-2 w-96 gap-3 p-3 overflow-y-scroll">
        <CardList
          cards={cardsForDisplay}
          source={CardDragSource.CARD_LIBRARY}
        />
      </div>
    </Droppable>
  );
};

export default CardLibrary;
