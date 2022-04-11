import React from "react";
import styled from "styled-components";

const BoldText = (props) => {
  const Text = styled.p`
    font-size: ${props.size}vw;
    color: ${props.color};
    font-family: "Archivo Black", sans-serif;
    text-transform: uppercase;
    ${props.addRules}
  `;
  return (
    <Text id={props.id === "contacts" ? props.id : null}>{props.content}</Text>
  );
};

export default BoldText;
