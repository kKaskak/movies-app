import { styled } from "styled-components";
const MoviePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 2rem;
`;
const Poster = styled.img`
  width: 300px;
  height: 400px;
`;

export { Poster, MoviePreviewContainer };
