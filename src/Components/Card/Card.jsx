import React from 'react';
import styled from "styled-components";
import BoldText from "../BoldText/BoldText";

const Card = (props) => {
    const {url, background,name,color,fsize, addRules, cardRules,info,infoSize} = props;

    const Cont = styled.div`
    width:490px;
    height:478px;`;

    const Item = styled.div`
    width:488px;
    height:476px;
    background-color:${background};
    transition: 0.25s ease-in-out;
    pointer-events: none;
    ${cardRules}
`;
    const Hidden = styled.p`
    transform: rotate3d(0, 1, 0, 180deg);
    opacity:0;
    color:#fff;
    font-size:${infoSize}px;
    font-family: 'Archivo Black', sans-serif;
    text-transform:uppercase;
    transition:opacity 0.3s;
    padding:60px 40px;
    `;
    const toggleClass = (event) =>{
        event.stopPropagation();

        if (event.target.nodeName ==="DIV"){
            event.target.children[0].classList.toggle("cardAnim");
        }
    }
    return(
        <Cont onClick={()=>window.open(url,"_blank")} onMouseOver={toggleClass} onMouseOut={toggleClass}>
            <Item>
                <BoldText content={name} size={fsize} color={color} addRules={addRules}/>
                <Hidden>{info}</Hidden>
            </Item>
        </Cont>
    );
}

export default Card;