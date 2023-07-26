import { motion } from "framer-motion";
import { styled } from "styled-components";

const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 4rem;
  margin: 0 auto;
  gap: 1.5rem;
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

export const Heading = styled(motion.h1)`
  font-size: 4rem;
  text-align: center;
  background: #f6f8f9;
  background: radial-gradient(
    circle farthest-corner at center center,
    #f6f8f9 0%,
    #c7cccf 30%,
    #bfc5c9 60%,
    #f5f7f9 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Subheading = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  color: #090000;
`;

export const Category = styled(motion.button)`
  padding: 0.7rem 1rem;
  background: #fff;
  border-radius: 1rem;
  border: 2px solid #090000;
  color: #090000;
  margin: 1rem;
  transition: 0.4s cubic-bezier(0.37, 0, 0.63, 1);
  &:hover {
    color: #fff;
    background: #090000;
    border: 2px solid #fff;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export { MoviesList, SearchBar, ErrorModal };
