import React from 'react';
import BoldText from "../BoldText/BoldText";
import styled from "styled-components";
import {Waypoint} from "react-waypoint";
import anime from "animejs";

const Intro = (props) => {
    const Int = styled.section`
    display:flex;
    flex-wrap:wrap;
    height:1080px;
    background-color:#2D2D2D; 
    max-width:1920px;
    
    `;
    const Container = styled.div`
    height:1080px;
    background-image:url(/introbanner.png);
     background-size:cover;
      background-repeat:no-repeat;
      mix-blend-mode: screen;
      `;
    const Name = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:385px; 
    margin-top:168px; 
    margin-left:105px;
    `;
    const WhatIDo = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    height:385px; 
    margin-top:168px; 
    margin-left:105px;
    
    `;

    const fadeIn = (sectionNum)=>{
        console.log(this)
        anime.timeline({loop: false})
            .add({
                targets: `section:nth-child(${sectionNum}) div>p`,
                rotateY: [0,-30, 0],
                duration: 3000,
                delay: 0,
            })};

    return(
    <Int>
        <Container id={props.id}>
        <Name>

        <BoldText content="daniil" size="200" color="#E4E4E4"/>
        <BoldText content="shcherbakov" size="180" color="#E4E4E4"/>
            <Waypoint
                onEnter={()=>fadeIn(1)}/>
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