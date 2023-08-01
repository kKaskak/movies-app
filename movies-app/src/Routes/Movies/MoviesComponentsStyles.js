import { motion } from "framer-motion";
import { styled } from "styled-components";

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 4rem;
  margin: 0 auto;
  gap: 1.5rem;
`;
export const SearchBar = styled.input`
  /* Add your styles for the search bar here */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;
export const ErrorModal = styled.div`
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
  background: #51bacf;
  background: linear-gradient(to right, #51bacf 0%, #0d090a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;
export const Subheading = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  background: #51bacf;
  background: linear-gradient(to right, #51bacf 0%, #0d090a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;
