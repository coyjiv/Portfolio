import React from 'react';
import styled from "styled-components";
import CardWrapper from "../CardWrapper/CardWrapper";

const PortfolioCards = (props) => {
    const Portfolio = styled.section`height: 2000px;background-image:url(/portfolio.png); mix-blend-mode: difference;
    &::before{
    content:"";
    display:block;
    width: 100%;
    height: 100%;
    position: absolute;
    background:#000;
    opacity:0.6;
    z-index:-1;
    }
    `;
    return(
        <Portfolio>
            <CardWrapper/>
        </Portfolio>
    )
};

export default PortfolioCards;