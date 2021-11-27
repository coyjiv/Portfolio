import React from 'react';
import {ScBoldText} from "./styled";

const BoldText = (props) => {
    return(
        <ScBoldText size={props.size}
                    color={props.color}
                    addRules={props.addRules}
                    id={props.id==="contacts"? props.id : null}>{props.content}</ScBoldText>
    )
};

export default BoldText;