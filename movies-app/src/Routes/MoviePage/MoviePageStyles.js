import { styled } from "styled-components";

export const MoviePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 4rem 4rem;

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const MovieNotAvaiableContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonHomepage = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem 1rem;
  background: #fff;
  border-radius: 3rem;
  border: 2px solid #0d090a;
  color: #0d090a;
  margin: 0 auto 3rem;
  transition: 0.4s cubic-bezier(0.37, 0, 0.63, 1);
  &:hover {
    color: #fff;
    background: #0d090a;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 3rem;
`;

export const MainImage = styled.img`
  height: 450px;
  border-radius: 1rem;
  margin-bottom: 3rem;
  object-fit: contain;
  @media screen and (max-width: 900px) {
    height: 350px;
    object-fit: contain;
    border-radius: 1rem;
  }
`;

export const MovieContent = styled.div`
  margin-left: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;
