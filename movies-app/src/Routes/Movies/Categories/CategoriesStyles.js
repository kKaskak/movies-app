import { motion } from "framer-motion";
import { styled, css } from "styled-components";

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
  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background: #0d090a;
    `}
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
    props.active &&
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
    props.active &&
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
