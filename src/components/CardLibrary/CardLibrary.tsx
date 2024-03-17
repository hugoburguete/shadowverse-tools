import { Card, CardProps } from '../Card/Card';

export type CardLibraryProps = {
  cards: CardProps[];
};

const CardLibrary = ({ cards }: CardLibraryProps) => {
  return (
    <div className="grid grid-cols-2 w-96 gap-3 p-3 overflow-y-auto">
      {cards.map((card) => (
        <div key={card.cardId}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardLibrary;
