import styled from "styled-components";

export const ScBoldText = styled.p`
font-size: ${({size})=>size}px;
  color: ${({color})=>color};
  font-family: 'Archivo Black',
   sans-serif;
   text-transform:uppercase;
   ${({addRules})=>addRules}
`;