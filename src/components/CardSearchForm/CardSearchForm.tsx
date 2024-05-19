import { useQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { DeckFormat } from '../../entities/card';
import { QueryCardsArgs } from '../../gql/generated/graphql';
import { QUERY_GET_FILTER_DATA } from '../../gql/queries/expansion';
import { toggleArrayItem } from '../../lib/array';
import { capitalizeFirstLetter } from '../../lib/string';
import Button from '../Button';
import SearchInput from '../SearchInput';
import Checkbox from '../forms/Checkbox';
import FormGroup from '../forms/FormGroup';
import Label from '../forms/Label';
import RadioButton from '../forms/RadioButton';
import Heading from '../typography/Heading';

export type CardSearchFormProps = {
  onSubmit: (searchArgs: QueryCardsArgs) => void;
  onFormatChange: (format: DeckFormat) => void;
};

const CardSearchForm: React.FC<CardSearchFormProps> = ({
  onSubmit,
  onFormatChange,
}) => {
  const [searchFiltersToggled, setSearchFiltersToggled] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<DeckFormat>('standard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClassIds, setSelectedClassIds] = useState<number[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExpansions, setSelectedExpansions] = useState<number[]>([]);
  const [selectedRarities, setSelectedRarities] = useState<number[]>([]);
  const formats = ['standard', 'gloryfinder'];
  const cardTypes = ['Follower', 'Follower / Evolve', 'Spell', 'Leader'];
  const { loading, data } = useQuery(QUERY_GET_FILTER_DATA);
  const expansions = data?.expansions.edges?.map((edge) => edge.node) ?? [];
  const rarities = data?.rarities ?? [];
  const classes = data?.classes.edges?.map((edge) => edge.node) ?? [];

  const doSearch = () => {
    onSubmit({
      searchTerm,
      cost: selectedCosts,
      types: selectedTypes,
      expansions: selectedExpansions,
      classes: selectedClassIds,
      rarities: selectedRarities,
    });
  };

  useEffect(() => {
    onSubmit({
      searchTerm,
      cost: selectedCosts,
      types: selectedTypes,
      expansions: selectedExpansions,
      classes: selectedClassIds,
      rarities: selectedRarities,
    });
  }, [
    searchTerm,
    selectedCosts,
    selectedTypes,
    selectedExpansions,
    selectedRarities,
    selectedClassIds,
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

  const onClassSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedClassIds(
      toggleArrayItem(parseInt(e.target.value), selectedClassIds)
    );
  };

  const onFormatSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    const newFormat = e.target.value as DeckFormat;
    setSelectedFormat(newFormat);
    onFormatChange(newFormat);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Heading level={3} className="text-center">
        Card search
      </Heading>
      <FormGroup>
        <Label className="mt-1 min-w-14" htmlFor="filter-search">
          Search:{' '}
        </Label>
        <SearchInput
          className="w-full"
          id={'filter-search'}
          onSearch={onSearch}
        />
      </FormGroup>

      <Button
        onClick={() => setSearchFiltersToggled(!searchFiltersToggled)}
        className="block m-auto"
      >
        Advanced filters
      </Button>

      <div
        className={`max-h-0 transition-all duration-200 overflow-hidden ${searchFiltersToggled ? '' : 'max-h-72'} border-b border-vulcan-800 mb-3 pb-3`}
      >
        <FormGroup className="border-t border-vulcan-800 mt-3 pt-3">
          <Label className="mt-1 min-w-14" htmlFor="filter-format" faux>
            Format:{' '}
          </Label>
          {formats.map((format) => (
            <RadioButton
              id={`filter-format-${format}`}
              key={`filter-format-${format}`}
              name="format"
              value={format}
              checked={selectedFormat.includes(format)}
              onChange={onFormatSelected}
            >
              {capitalizeFirstLetter(format)}
            </RadioButton>
          ))}
        </FormGroup>

        <FormGroup>
          <Label className="mt-1 min-w-14" htmlFor="card-search-form">
            Class:{' '}
          </Label>
          <div className="flex flex-wrap gap-1">
            {classes.map((clax) => (
              <Checkbox
                id={`filter-class-${clax.id}`}
                key={`filter-class-${clax.id}`}
                name="cost"
                value={clax.id}
                checked={selectedClassIds.includes(clax.id)}
                onChange={onClassSelected}
              >
                {clax.name}
              </Checkbox>
            ))}
          </div>
        </FormGroup>

        <FormGroup>
          <Label className="mt-1 min-w-14" htmlFor="card-search-form">
            Cost:{' '}
          </Label>
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
          <Label className="mt-1 min-w-14" htmlFor="card-search-form">
            Type:{' '}
          </Label>
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
          <>
            <FormGroup className="mt-1">
              <Label
                className="mt-1 min-w-14"
                htmlFor="card-search-form-expansion"
              >
                Set:{' '}
              </Label>
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

            <FormGroup className="mt-1">
              <Label
                className="mt-1 min-w-14"
                htmlFor="card-search-form-expansion"
              >
                Rarity:{' '}
              </Label>
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
          </>
        )}
      </div>
    </form>
  );
};

export default CardSearchForm;
