import { useQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { QueryCardsArgs } from '../../gql/generated/graphql';
import { QUERY_GET_FILTER_DATA } from '../../gql/queries/expansion';
import { toggleArrayItem } from '../../lib/array';
import SearchInput from '../SearchInput';
import Checkbox from '../forms/Checkbox';
import FormGroup from '../forms/FormGroup';
import Label from '../forms/Label';

export type CardSearchFormProps = {
  onSubmit: (searchArgs: QueryCardsArgs) => void;
};

const CardSearchForm: React.FC<CardSearchFormProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCosts, setSelectedCosts] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExpansions, setSelectedExpansions] = useState<number[]>([]);
  const [selectedRarities, setSelectedRarities] = useState<number[]>([]);
  const cardTypes = ['Follower', 'Follower / Evolve', 'Spell', 'Leader'];
  const { loading, data } = useQuery(QUERY_GET_FILTER_DATA, {
    variables: { take: 12 },
  });
  const expansions = data?.expansions ?? [];
  const rarities = data?.rarities ?? [];

  const doSearch = () => {
    onSubmit({
      searchTerm,
      cost: selectedCosts,
      types: selectedTypes,
      expansions: selectedExpansions,
      rarities: selectedRarities,
      skip: 0,
      take: 12,
    });
  };

  useEffect(() => {
    onSubmit({
      searchTerm,
      cost: selectedCosts,
      types: selectedTypes,
      expansions: selectedExpansions,
      rarities: selectedRarities,
      skip: 0,
      take: 12,
    });
  }, [
    searchTerm,
    selectedCosts,
    selectedTypes,
    selectedExpansions,
    selectedRarities,
    onSubmit,
  ]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    doSearch();
  };

  const onSearch = (searchTerm: string): void => {
    setSearchTerm(() => searchTerm);
  };

  const onCostSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCosts(toggleArrayItem(parseInt(e.target.value), selectedCosts));
  };

  const onTypeSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedTypes(toggleArrayItem(e.target.value, selectedTypes));
  };

  const onExpansionSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedExpansions(
      toggleArrayItem(parseInt(e.target.value), selectedExpansions)
    );
  };

  const onRaritySelected = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedRarities(
      toggleArrayItem(parseInt(e.target.value), selectedRarities)
    );
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
            checked={selectedCosts.includes(costNum)}
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

      {!loading && (
        <FormGroup>
          <Label htmlFor="card-search-form-expansion">Set: </Label>
          {expansions.map((expansion) => (
            <Checkbox
              id={`filter-expansion-${expansion.id}`}
              key={`filter-expansion-${expansion.id}`}
              name="expansion"
              value={expansion.id}
              checked={selectedExpansions.includes(expansion.id)}
              onChange={onExpansionSelected}
            >
              {expansion.name}
            </Checkbox>
          ))}
        </FormGroup>
      )}

      {!loading && (
        <FormGroup>
          <Label htmlFor="card-search-form-expansion">Rarity: </Label>
          {rarities.map((rarity) => (
            <Checkbox
              id={`filter-rarity-${rarity.id}`}
              key={`filter-rarity-${rarity.id}`}
              name="rarity"
              value={rarity.id}
              checked={selectedRarities.includes(rarity.id)}
              onChange={onRaritySelected}
            >
              {rarity.name}
            </Checkbox>
          ))}
        </FormGroup>
      )}
    </form>
  );
};

export default CardSearchForm;
