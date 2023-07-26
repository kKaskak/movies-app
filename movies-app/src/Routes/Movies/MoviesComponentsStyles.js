import { motion } from "framer-motion";
import { styled, css } from "styled-components";

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

export const Category = styled(motion.button)`
  padding: 0.7rem 1rem;
  background: #fff;
  border-radius: 3rem;
  border: 2px solid #0d090a;
  color: #0d090a;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  transition: 0.4s cubic-bezier(0.37, 0, 0.63, 1);
  &:hover {
    color: #fff;
    background: #0d090a;
  }
`;
// Define the styled component
export const CategoryContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: 0 auto 1rem;
  height: 3rem;
  overflow: hidden;
  trasform: transition: 1s ease-in-out;
  ${(props) =>
    props.is_active &&
    css`
      height: auto;
    `}
`;

export const ShowMoreButton = styled.button`
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
  ${(props) =>
    props.is_active &&
    css`
      background: #0d090a;
      color: #fff;
    `}
`;

export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { MoviesList, SearchBar, ErrorModal };
