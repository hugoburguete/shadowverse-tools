import throttle from 'lodash.throttle';
import { useCallback, useState } from 'react';
import Input from '../forms/Input';

export type SearchInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  searchTerm?: string;
  onSearch: (searchTerm: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm: initialSearchTerm,
  onSearch,
  ...rest
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm ?? '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledOnSearch = useCallback(
    throttle((searchTerm) => onSearch(searchTerm), 750),
    [onSearch]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    throttledOnSearch(e.target.value);
  };

  return <Input type="text" value={searchTerm} onChange={onChange} {...rest} />;
};

export default SearchInput;
