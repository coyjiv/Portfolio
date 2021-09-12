import React from 'react';
import BoldText from "../BoldText/BoldText";
import styled from "styled-components";

const Intro = (props) => {
    const Int = styled.section`display:flex;flex-wrap:wrap;height:1080px;background-color:#2D2D2D`;
    const Container = styled.div`height:1080px;background-image:url(/introbanner.png);mix-blend-mode: screen;`;
    const Name = styled.div`display:flex;flex-wrap:wrap;height:385px; margin-top:168px; margin-left:105px;`;
    const WhatIDo = styled.div`display:flex;flex-wrap:wrap;flex-direction:column;height:385px; margin-top:168px; margin-left:105px;`;
    return(
    <Int>
        <Container>
        <Name>
        <BoldText content="daniil" size="200" color="#E4E4E4"/>
        <BoldText content="shcherbakov" size="180" color="#E4E4E4"/>
        </Name>
            <WhatIDo>
                <BoldText content="i create adaptive websites" size="24" color="#E4E4E4"/>
                <BoldText content=" and web-applications " size="24" color="#E4E4E4"/>
                <BoldText content="front-end developer" size="180" color="#E4E4E4" addRules="margin:20px 0px 0px 90px;"/>
            </WhatIDo>
        </Container>
    </Int>
)};

export default Intro;