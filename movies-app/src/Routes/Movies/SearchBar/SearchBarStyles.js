// MoviesComponentsStyles.js
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  max-width: 550px;
  margin: 0 auto;
  padding: 1rem 4rem;
  border-radius: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
`;

export const SearchButton = styled.button`
  margin-left: 10px;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

export const MoviesList = styled.div`
  /* Your existing styles for MoviesList */
`;
