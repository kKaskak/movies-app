import React, { useState } from "react";
import PropTypes from "prop-types";
import { SearchBarContainer, SearchInput } from "./SearchBarStyles";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    // if (e.target.value.length >= 3) {
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

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
