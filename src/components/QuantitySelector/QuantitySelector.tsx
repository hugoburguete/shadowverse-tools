import Button from '../Button';
import Input from '../forms/Input';

export type QuantitySelectorProps = {
  quantity: number;
  onChange?: (quantity: number) => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
};

const QuantitySelector = ({
  quantity = 0,
  onChange = () => {},
  onDecrease = () => {},
  onIncrease = () => {},
}: QuantitySelectorProps) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newQty = parseInt(e.target.value, 10);
    onChange(newQty);
  };

  return (
    <div className="flex gap-3 justify-center">
      <Button
        onClick={() => {
          onDecrease();
        }}
      >
        -
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={onChangeHandler}
        className="text-center"
      />
      <Button
        onClick={() => {
          onIncrease();
        }}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
