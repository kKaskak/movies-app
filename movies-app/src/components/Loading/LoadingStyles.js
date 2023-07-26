import { styled } from "styled-components";
export const CustomLoader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width:50px;
    height:50px;
    --c:radial-gradient(farthest-side,#0d090a 92%,#0000);
    background: 
      var(--c) 50% 0,
      var(--c) 50% 100%,
      var(--c) 100% 50%,
      var(--c) 0    50%;
    background-size:12px 12px;
    background-repeat:no-repeat;
    animation:s7 1s infinite;
  }
  @keyframes s7 {to{transform: rotate(.5turn)}}
`;
