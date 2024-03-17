import { Card, CardProps } from '../Card/Card';
import Draggable from '../dnd/Draggable';

export type CardLibraryProps = {
  cards: CardProps[];
};

const CardLibrary = ({ cards }: CardLibraryProps) => {
  return (
    <div className="grid grid-cols-2 w-96 gap-3 p-3 overflow-y-scroll">
      {cards.map((card) => (
        <div key={card.cardId}>
          <Draggable id={card.cardId}>
            <Card {...card} />
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default CardLibrary;
