import { CardSimplified } from '../../entities/card';
import Image from '../Image';

export type CardProps = {
  card: CardSimplified;
};

export const CardDisplay = ({ card: { image, name } }: CardProps) => {
  return <Image src={image} alt={name} aspectRatio="10/14" />;
};
