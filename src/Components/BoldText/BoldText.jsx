import React from 'react';
import styled from "styled-components";

const BoldText = (props) => {
    const Text = styled.p`font-size: ${props.size}px;
  color: ${props.color};font-family: 'Archivo Black', sans-serif; text-transform:uppercase;${props.addRules}`;
    return(
        <Text>{props.content}</Text>
    )
};

export default BoldText;