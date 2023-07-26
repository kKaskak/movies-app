import { motion } from "framer-motion";
import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  height: 7vh;
  margin: 0 auto;
  padding: 0 4rem;
  border-bottom: 2px solid black;
  background: #808080;
`;

export const LinkText = styled(motion.h4)`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #ffffff;
`;
