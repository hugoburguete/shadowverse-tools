import { CardSimplified, Deck } from '../../entities/card';
import { findCardFromDeck } from '../../lib/helpers/card';
import Button from '../Button';
import Image from '../Image';
import QuantitySelector from '../QuantitySelector';
import P from '../typography/Paragraph';

export type CardInfoModalProps = {
  deck: Deck;
  cardExamined?: CardSimplified;
  onAddCard: (quantity: number) => void;
  onRemoveCard: (quantity: number) => void;
  onClose: () => void;
};

const CardInfoModal = ({
  cardExamined,
  deck,
  onClose,
  onAddCard,
  onRemoveCard,
}: CardInfoModalProps) => {
  if (!cardExamined) {
    return null;
  }

  const cardExaminedInDeck = cardExamined
    ? findCardFromDeck(cardExamined.id, deck)
    : null;

  return (
    <div
      className="flex justify-center fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          onClose();
        }
      }}
    >
      <div className="w-96 pt-20">
        <div className="border-vulcan-800 rounded-lg bg-vulcan-900 border p-5">
          <P className="mb-3">{cardExamined.name}</P>
          <Image
            src={cardExamined.image}
            aspectRatio="10/14"
            className="mb-3"
          />
          <P>Cost: {cardExamined.cost}</P>
          <P>Attack: {cardExamined.attack}</P>
          <P>Health: {cardExamined.health}</P>
          <P className="mb-3">Type: {cardExamined.type}</P>

          <div className="text-center">
            <QuantitySelector
              quantity={cardExaminedInDeck?.quantity ?? 0}
              onIncrease={() => (cardExaminedInDeck ? onAddCard(1) : false)}
              onDecrease={() => (cardExaminedInDeck ? onRemoveCard(1) : false)}
              onChange={(qty) =>
                cardExaminedInDeck
                  ? onAddCard(qty - cardExaminedInDeck.quantity)
                  : false
              }
            />
          </div>

          <Button className="block m-auto mt-3" onClick={() => onClose()}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardInfoModal;
