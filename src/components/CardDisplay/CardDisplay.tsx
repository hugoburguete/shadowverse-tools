import { CardSimplified } from '../../entities/card';

export type CardProps = {
  card: CardSimplified;
};

export const CardDisplay = ({ card: { image, name } }: CardProps) => {
  return (
    <div className="h-0 pb-[140%] relative w-full">
      <img
        loading="lazy"
        className="w-full h-full block absolute"
        src={image}
        alt={name}
      />
    </div>
  );
};
