import { useEffect, useState } from 'react';
import { QuerySearchCardsArgs } from '../../__generated__/graphql';
import { toggleArrayItem } from '../../lib/array';
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
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const cardTypes = ['Follower', 'Follower / Evolve', 'Spell', 'Leader'];

  const doSearch = () => {
    onSubmit({
      searchTerm,
      cost,
      types: selectedTypes,
      skip: 0,
      take: 10,
    });
  };

  useEffect(() => {
    onSubmit({
      searchTerm,
      cost,
      types: selectedTypes,
      skip: 0,
      take: 10,
    });
  }, [searchTerm, cost, selectedTypes, onSubmit]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    doSearch();
  };

  const onSearch = (searchTerm: string): void => {
    setSearchTerm(() => searchTerm);
  };

  const onCostSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCost(toggleArrayItem(parseInt(e.target.value), cost));
  };

  const onTypeSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedTypes(toggleArrayItem(e.target.value, selectedTypes));
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
            checked={cost.includes(costNum)}
            onChange={onCostSelected}
          >
            {costNum}
            {costNum === 8 ? '+' : ''}
          </Checkbox>
        ))}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="card-search-form">Type: </Label>
        {cardTypes.map((type) => (
          <Checkbox
            id={`filter-type-${type}`}
            key={`filter-type-${type}`}
            name="cost"
            value={type}
            checked={selectedTypes.includes(type)}
            onChange={onTypeSelected}
          >
            {type}
          </Checkbox>
        ))}
      </FormGroup>
    </form>
  );
};

export default CardSearchForm;
