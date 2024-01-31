import { motion } from "framer-motion";
import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  height: 7vh;
  margin-bottom: 3rem;
  padding: 0 4rem;
  border-bottom: 2px solid #0d090a;
`;

export const LinkText = styled(motion.h4)`
  font-family: "Manrope", sans-serif;
  font-size: 23px;
  font-weight: 700;
  color: #0d090a;
`;
