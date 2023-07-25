import { styled } from "styled-components";
const MoviePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Poster = styled.img`
width: 100%,
height: 100%;
`;

export { Poster, MoviePreviewContainer };
