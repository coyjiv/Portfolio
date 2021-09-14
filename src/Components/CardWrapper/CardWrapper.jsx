import React from 'react';
import styled from "styled-components";
import Card from "../Card/Card";

const CardWrapper = (props) => {
    const CardC = styled.div`display:flex;`;
    return(
        <CardC>
            <Card name="SERTIN" background="#201F1F;" color="#C4C4C4" fsize="80"
                  addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                  cardRules="
                  transform:translateY(102px)translateX(84px);
                  "/>
                  <Card name="FORKIO" background="#201F1F;" color="#C4C4C4" fsize="80"
                        addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                        cardRules="
                  transform:translateY(310px)translateX(300px);
                  "/>
        </CardC>
    );
}

export default CardWrapper;