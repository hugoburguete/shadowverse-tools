import { CardDragSource, DeckCard } from '../../../../entities/card';
import Draggable from '../../../dnd/Draggable';
import P from '../../../typography/Paragraph';

export type CardListItemProps = {
  card: DeckCard;
};

const CardListItem: React.FC<CardListItemProps> = ({ card }) => {
  return (
    <li className="w-full">
      <Draggable
        style={{ backgroundImage: `url(${card.image})` }}
        className="relative block p-2 pl-[45px] w-full border-vulcan-900 border text-left bg-center bg-cover"
        id={`${card.cardId}-${CardDragSource.DECK}`}
        data={{ id: card.cardId, source: CardDragSource.DECK, type: card.type }}
      >
        <p className="absolute left-0 top-0 bottom-0 text-center w-[45px]">
          <span className="text-white block mb-0 leading-1">
            {card.type ? card.cost : ''}
          </span>
          <span className="text-white block text-xs">
            {card.rarity.acronym}
          </span>
        </p>
        <P
          className="overflow-hidden block text-ellipsis whitespace-nowrap"
          style={{ width: 'calc(80%)' }}
        >{`${card.quantity}x ${card.name} ${card.valid ? 'valid' : 'invalid'}`}</P>
      </Draggable>
    </li>
  );
};

export default CardListItem;
