import { CardDragSource, DeckCard } from '../../entities/card';
import Badge from '../Badge';
import Button from '../Button';
import { CardDisplay } from '../CardDisplay/CardDisplay';
import Draggable from '../dnd/Draggable';

export type CardClickEvent = (card: DeckCard) => void;
export type CardListProps = {
  cards: DeckCard[];
  source: CardDragSource;
  showQuantity?: boolean;
  showInfoIcon?: boolean;
  className?: string;
  onCardClick?: CardClickEvent;
  onInfoClick?: CardClickEvent;
};

const CardList: React.FC<CardListProps> = ({
  cards,
  source,
  onCardClick,
  onInfoClick,
  className,
  showQuantity = false,
  showInfoIcon = false,
}) => {
  return (
    <div className={`grid ${className || 'gap-3 grid-cols-4'}`}>
      {cards.map((card, index) => (
        <div key={card.cardId} className="relative w-full group">
          <Draggable
            id={`${card.cardId}-${source}-${index}`}
            data={{ id: card.cardId, source, type: card.type }}
            className="w-full block"
          >
            {/* Quantity */}
            {showQuantity && (
              <Badge className="absolute m-2">{card.quantity}</Badge>
            )}

            <CardDisplay card={card} onClick={() => onCardClick?.(card)} />

            {showInfoIcon && (
              <Button
                className="mt-2 text-sm pl-3 pr-3"
                onClick={() => onInfoClick?.(card)}
              >
                Show info
              </Button>
            )}
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default CardList;
