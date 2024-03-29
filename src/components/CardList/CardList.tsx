import { CardDragSource, CardWithQuantity } from '../../entities/card';
import Badge from '../Badge';
import { CardDisplay } from '../CardDisplay/CardDisplay';
import Draggable from '../dnd/Draggable';

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
        <div key={card.cardId} className="max-w-52 relative">
          <Draggable
            id={`${card.cardId}-${source}-${index}`}
            data={{ id: card.cardId, source, type: card.type }}
          >
            {showQuantity && (
              <Badge className="absolute m-2">{card.quantity}</Badge>
            )}
            <CardDisplay card={card} />
          </Draggable>
        </div>
      ))}
    </>
  );
};

export default CardList;
