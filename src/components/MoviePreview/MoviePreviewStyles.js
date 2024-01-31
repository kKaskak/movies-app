import { styled } from "styled-components";
import { motion } from "framer-motion";
export const MoviePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  max-width: 300px;
  padding-bottom: 1rem;
`;
export const Poster = styled(motion.div)`
  width: 300px;
  height: 400px;
  border-radius: 1rem;
`;

export const FavoriteHeart = styled(motion.button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
  padding: 1rem;
  -webkit-tap-highlight-color: transparent;
  z-index: 1;
`;

export const Date = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  margin: 1.5rem 1rem;
  text-shadow: 0px 2px 2px #000000;
`;

export const MovieTitle = styled.b`
  font-size: 16px;
  max-width: 90%;
`;
