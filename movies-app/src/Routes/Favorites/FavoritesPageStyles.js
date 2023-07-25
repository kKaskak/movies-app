import { styled } from "styled-components";

export const FavoritesContainer = styled.div`
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
