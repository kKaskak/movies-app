import { styled } from "styled-components";
export const CategoriesErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const CategoriesErrorText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const CategoriesRefreshButton = styled.button`
  margin-left: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem 1rem;
  background: #fff;
  border-radius: 3rem;
  border: 2px solid #0d090a;
  color: #0d090a;
  transition: 0.4s cubic-bezier(0.37, 0, 0.63, 1);
  &:hover {
    color: #fff;
    background: #0d090a;
  }
`;
