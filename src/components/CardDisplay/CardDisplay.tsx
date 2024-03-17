import { Card } from '../../entities/card';

export type CardProps = {
  card: Card;
};

export const CardDisplay = ({ card: { image, name } }: CardProps) => {
  return (
    <div className="w-full">
      <img src={image} alt={name} />
    </div>
  );
};
