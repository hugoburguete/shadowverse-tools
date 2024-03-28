import { useState } from 'react';
import { QuerySearchCardsArgs } from '../../__generated__/graphql';
import SearchInput from '../SearchInput';
import FormGroup from '../forms/FormGroup';
import Label from '../forms/Label';
import RadioButton from '../forms/RadioButton';

export type CardSearchFormProps = {
  onSubmit: (searchArgs: QuerySearchCardsArgs) => void;
};

const CardSearchForm: React.FC<CardSearchFormProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cost, setCost] = useState<number[]>([]);

  const doSearch = () => {
    onSubmit({
      searchTerm,
      skip: 0,
      take: 10,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    doSearch();
  };

  const onSearch = (searchTerm: string): void => {
    setSearchTerm(() => searchTerm);
    doSearch();
  };

  const onCostSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let newCost = [...cost];
    newCost.push(parseInt(e.target.value));
    setCost(newCost);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormGroup>
        <Label htmlFor="card-search-form">Search: </Label>
        <SearchInput id={'card-search-form'} onSearch={onSearch} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="card-search-form">Cost: </Label>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((costNum) => (
          <RadioButton
            id={`filter-cost-${costNum}`}
            key={`filter-cost-${costNum}`}
            name="cost"
            value={costNum}
            data-test={cost.includes(costNum)}
            checked={cost.includes(costNum)}
            onChange={onCostSelected}
          >
            {costNum}
            {costNum === 8 ? '+' : ''}
          </RadioButton>
        ))}
      </FormGroup>
    </form>
  );
};

export default CardSearchForm;
