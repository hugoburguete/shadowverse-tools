export type CardProps = {
  cardId: string;
  name: string;
  type: string;
  class: string;
  trait: string;
  cost: number;
  attack?: number;
  health?: number;
  image: string;
};

export const Card = ({ image, name }: CardProps) => {
  return (
    <div>
      <img src={image} alt={name} />
    </div>
  );
};
