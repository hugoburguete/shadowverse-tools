import { useState } from 'react';
import { QuerySearchCardsArgs } from '../../__generated__/graphql';
import SearchInput from '../SearchInput';

export type CardSearchFormProps = {
  onSubmit: (searchArgs: QuerySearchCardsArgs) => void;
};

const CardSearchForm: React.FC<CardSearchFormProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const doSearch = () => {
    onSubmit({
      searchTerm,
      skip: 0,
      take: 10,
    });
  };

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    doSearch();
  };

  return (
    <form onSubmit={() => doSearch()}>
      <SearchInput onSearch={onSearch} />
    </form>
  );
};

export default CardSearchForm;
