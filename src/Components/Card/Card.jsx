import React from 'react';
import styled from "styled-components";
import BoldText from "../BoldText/BoldText";

const Card = (props) => {
    const {background,name,color,fsize, addRules, cardRules} = props;
    const Item = styled.div`
    width:488px;
    height:476px;
    background-color:${background};
    ${cardRules}
`;
    const toggleClass = (event) =>{
        console.log(event.target)
    }
    return(
        <Item onMouseOver={toggleClass} onMouseDown={toggleClass}>
            <BoldText content={name} size={fsize} color={color} addRules={addRules}/>
        </Item>
    );
}

export default Card;