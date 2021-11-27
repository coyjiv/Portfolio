import React from 'react';
import BoldText from "../BoldText/BoldText";
import {ScCardContainer, ScCardItem, ScCardHiddenText} from "./styled";

const Card = (props) => {
    const {url, background,name,color,fsize, addRules, cardRules,info,infoSize} = props;

    const toggleClass = (event) =>{
        event.stopPropagation();

        if (event.target.nodeName ==="DIV"){
            event.target.children[0].classList.toggle("cardAnim");
        }
    }
    return(
        <ScCardContainer onClick={()=>window.open(url,"_blank")} onMouseOver={toggleClass} onMouseOut={toggleClass}>
            <ScCardItem background={background} cardRules={cardRules}>
                <BoldText content={name} size={fsize} color={color} addRules={addRules}/>
                <ScCardHiddenText infoSize={infoSize}>{info}</ScCardHiddenText>
            </ScCardItem>
        </ScCardContainer>
    );
}

export default Card;