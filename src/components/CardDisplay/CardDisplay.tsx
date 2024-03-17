import { Card } from '../../entities/card';

export type CardProps = {
  card: Card;
};

export const CardDisplay = ({ card: { image, name } }: CardProps) => {
  return (
    <div>
      <img src={image} alt={name} />
    </div>
  );
};
