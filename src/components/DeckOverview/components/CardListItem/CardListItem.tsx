import { CardDragSource, CardWithQuantity } from '../../../../entities/card';
import Badge from '../../../Badge';
import Draggable from '../../../dnd/Draggable';

export type CardListItemProps = {
  card: CardWithQuantity;
};

const CardListItem: React.FC<CardListItemProps> = ({ card }) => {
  return (
    <li>
      <Draggable
        id={`${card.cardId}-${CardDragSource.DECK}`}
        data={{ id: card.cardId, source: CardDragSource.DECK, type: card.type }}
      >
        <Badge className="absolute m-2">{card.quantity}</Badge>/
        <span>{card.name}</span>/<span>x{card.quantity}</span>
      </Draggable>
    </li>
  );
};

export default CardListItem;
