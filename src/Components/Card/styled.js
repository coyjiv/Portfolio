import styled from "styled-components";

export const ScCardContainer = styled.div`
    width:490px;
    height:478px;
`;

export const ScCardItem = styled.div`
    width:488px;
    height:476px;
    background-color:${({background})=>background};
    transition: 0.25s ease-in-out;
    pointer-events: none;
    ${({cardRules})=>cardRules}
`;

export const ScCardHiddenText = styled.p`
    transform: rotate3d(0, 1, 0, 180deg);
    opacity:0;
    color:#fff;
    font-size:${({infoSize})=>infoSize}px;
    font-family: 'Archivo Black', sans-serif;
    text-transform:uppercase;
    transition:opacity 0.3s;
    padding:60px 40px;
    `;