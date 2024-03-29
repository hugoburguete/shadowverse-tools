import { useEffect, useState } from 'react';
import { QuerySearchCardsArgs } from '../../__generated__/graphql';
import SearchInput from '../SearchInput';
import Checkbox from '../forms/Checkbox';
import FormGroup from '../forms/FormGroup';
import Label from '../forms/Label';

export type CardSearchFormProps = {
  onSubmit: (searchArgs: QuerySearchCardsArgs) => void;
};

const CardSearchForm: React.FC<CardSearchFormProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cost, setCost] = useState<number[]>([]);

  const doSearch = () => {
    onSubmit({
      searchTerm,
      cost,
      skip: 0,
      take: 10,
    });
  };

  useEffect(() => {
    onSubmit({
      searchTerm,
      cost,
      skip: 0,
      take: 10,
    });
  }, [searchTerm, cost, onSubmit]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    doSearch();
  };

  const onSearch = (searchTerm: string): void => {
    setSearchTerm(() => searchTerm);
  };

  const onCostSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const costNum = parseInt(e.target.value);
    const index = cost.indexOf(costNum);
    if (index > -1) {
      setCost([...cost.slice(0, index), ...cost.slice(index + 1, cost.length)]);
    } else {
      let newCost = [...cost];
      newCost.push(costNum);
      setCost(newCost);
    }
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
          <Checkbox
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
          </Checkbox>
        ))}
      </FormGroup>
    </form>
  );
};

export default CardSearchForm;
