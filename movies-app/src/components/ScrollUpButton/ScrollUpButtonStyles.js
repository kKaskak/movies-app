import styled from "styled-components";
export const Button = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem;
  z-index: 2;
  @media screen and (max-width: 700px) {
    margin: 0.5rem;
  }
  transition: opacity 0.5s;
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isvisible ? "all" : "none")};
  -webkit-tap-highlight-color: transparent;
`;
