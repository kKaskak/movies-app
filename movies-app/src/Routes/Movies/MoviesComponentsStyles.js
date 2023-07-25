import { styled } from "styled-components";

const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  padding: 1rem 4rem;
  margin: 0 auto;
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem;
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }
`;
const SearchBar = styled.input`
  /* Add your styles for the search bar here */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;
`;
const ErrorModal = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 8px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  max-width: 80%;

  /* Add any additional styles you want for the ErrorModal */
`;
export { MoviesList, SearchBar, ErrorModal };
