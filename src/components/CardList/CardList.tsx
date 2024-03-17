import { Card, CardDragSource } from '../../entities/card';
import { CardDisplay } from '../CardDisplay/CardDisplay';
import Draggable from '../dnd/Draggable';

type CardWithQuantity = Card & {
  quantity: number;
};

export type CardListProps = {
  cards: CardWithQuantity[];
  source: CardDragSource;
  showQuantity?: boolean;
};

const CardList: React.FC<CardListProps> = ({
  cards,
  source,
  showQuantity = false,
}) => {
  return (
    <>
      {cards.map((card, index) => (
        <div key={card.cardId}>
          <Draggable
            id={`${card.cardId}-${source}-${index}`}
            data={{ id: card.cardId, source }}
          >
            {showQuantity && <p>{card.quantity}</p>}
            <CardDisplay card={card} />
          </Draggable>
        </div>
      ))}
    </>
  );
};

export default CardList;
