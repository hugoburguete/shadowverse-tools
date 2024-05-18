import { CardDragSource, DeckCard } from '../../entities/card';
import Badge from '../Badge';
import { CardDisplay } from '../CardDisplay/CardDisplay';
import Draggable from '../dnd/Draggable';

export type CardClickEvent = (card: DeckCard) => void;
export type CardListProps = {
  cards: DeckCard[];
  source: CardDragSource;
  showQuantity?: boolean;
  onCardClick?: CardClickEvent;
};

const CardList: React.FC<CardListProps> = ({
  cards,
  source,
  onCardClick,
  showQuantity = false,
}) => {
  return (
    <div className="flex flex-wrap gap-3 p-3">
      {cards.map((card, index) => (
        <div key={card.cardId} className="max-w-52 relative w-full">
          <Draggable
            id={`${card.cardId}-${source}-${index}`}
            data={{ id: card.cardId, source, type: card.type }}
            className="w-full"
          >
            {showQuantity && (
              <Badge className="absolute m-2">{card.quantity}</Badge>
            )}
            <CardDisplay card={card} onClick={() => onCardClick?.(card)} />
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default CardList;
