import styled from "styled-components";

export const Cont = styled.div`
  width: 25vw;
  height: 25vw;
`;

export const Item = styled.div`
  width: 25vw;
  height: 25vw;
  background-color: ${({ background }) => background};
  transition: 0.25s ease-in-out;
  pointer-events: none;
  ${({ cardRules }) => cardRules}
`;
export const Hidden = styled.p`
  transform: rotate3d(0, 1, 0, 180deg);
  opacity: 0;
  color: #fff;
  font-size: ${({ infoSize }) => infoSize}vw;
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  transition: opacity 0.3s;
  padding: 60px 40px;
`;
