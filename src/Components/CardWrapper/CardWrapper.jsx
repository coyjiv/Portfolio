import React from 'react';
import styled from "styled-components";
import Card from "../Card/Card";

const CardWrapper = (props) => {
    const CardC = styled.div`display:flex;`;
    return(
        <CardC>
            <Card name="SERTIN" background="#201F1F;"/>
        </CardC>
    );
}

export default CardWrapper;