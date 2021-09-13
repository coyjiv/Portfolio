import React from 'react';
import styled from "styled-components";
import CardWrapper from "../CardWrapper/CardWrapper";

const PortfolioCards = (props) => {
    const Portfolio = styled.section`height: 2000px;mix-blend-mode: difference; background-image:url(/portfolio.png);`;
    return(
        <Portfolio>
            <CardWrapper/>
        </Portfolio>
    )
};

export default PortfolioCards;