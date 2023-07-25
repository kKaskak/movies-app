import React, { useState } from 'react';
import { SearchBarContainer, SearchInput } from './SearchBarStyles';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value); // directly call onSearch when the input changes
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;