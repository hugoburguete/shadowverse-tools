import { useEffect, useState } from 'react';

export type SearchInputProps = {
  searchTerm?: string;
  onSearch: (searchTerm: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm: initialSearchTerm,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm ?? '');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, onSearch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return <input type="text" value={searchTerm} onChange={onChange} />;
};

export default SearchInput;
