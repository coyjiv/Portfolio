import React from 'react';
import styled from "styled-components";

const Card = (props) => {
    const {background} = props;
    const item = styled.div`width:488px; height:476px; background-color:${background};&h1{color:#C4C4C4;}
`;
    const toggleClass = (event) =>{
        console.log(event.target)
    }
    return(
        <item onMouseOver={toggleClass} onMouseDown={toggleClass}>
            <h1>{props.name}</h1>
        </item>
    );
}

export default Card;