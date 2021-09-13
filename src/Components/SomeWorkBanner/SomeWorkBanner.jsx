import React from 'react';
import styled from "styled-components";
import BoldText from "../BoldText/BoldText";


const SomeWorkBanner = (props) => {
    const Cont = styled.section`padding-top:54px; height:1077px; background-color:#2D2D2D; position: relative; z-index:0;`;
    const StyledImg = styled.div`margin-left:15px;height:1177px; background-image:url(/someworkbanner.png); background-repeat:no-repeat;`;
    const UpperCont = styled.div`height:700px; position:absolute; z-index:5; width:100%;`;

    return(
    <Cont>
        <UpperCont>
            <BoldText content="some" size="180" color="#E4E4E4" addRules="margin-left:74px; margin-top:102px;"/>
            <BoldText content="works" size="180" color="#E4E4E4" addRules="margin-left:494px;"/>
            <BoldText content="of my" size="180" color="#E4E4E4" addRules="margin-left:calc(80% - 320px);"/>
            <BoldText content="the results of my work as a developer" size="24" color="#FFF" addRules="width:433px; margin-left:calc(30% - 224px); margin-top:95px;"/>
        </UpperCont>
        <StyledImg/>
    </Cont>
)
};

export default SomeWorkBanner;