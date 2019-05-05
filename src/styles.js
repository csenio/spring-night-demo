import styled from "styled-components";

export const Circle = styled.div`
  border-radius: 200px;
  height: 100px;
  width: 100px;
  opacity: 0.9;
  background: linear-gradient(#90ffff, #eefcff);
  box-shadow: 0 0 10px rgba(165, 255, 249, 0.6);
  will-change: transform;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
