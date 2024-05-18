import { CardSimplified } from '../../entities/card';
import Image from '../Image';

export type CardProps = {
  card: CardSimplified;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const CardDisplay = ({ card: { image, name }, onClick }: CardProps) => {
  return (
    <div onClick={onClick}>
      <Image src={image} alt={name} aspectRatio="10/14" />
    </div>
  );
};
