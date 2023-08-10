import { styled } from "styled-components";

export const MovieNotAvaiableContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
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
export const SubHeading = styled.h4`
  margin-bottom: 3rem;
`;
