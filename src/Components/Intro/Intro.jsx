import React from "react";
import BoldText from "../BoldText/BoldText";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import anime from "animejs";

const Intro = (props) => {
  const Int = styled.section`
    height: 1080px;
    background-color: #2d2d2d;
    padding-left: 40px;
    @media (max-width: 1825px) {
    }
    @media (max-width: 1440px) {
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 540px) {
      padding-left: 10px;
    }
    @media (max-width: 414px) {
      height: 811px;
    }
  `;
  const Container = styled.div`
    height: 1080px;
    background-image: url(/introbanner.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    mix-blend-mode: screen;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1440px) {
      margin-left: 0px;
    }
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    @media (max-width: 414px) {
      align-items: center;
      height: 811px;
    }
  `;
  const Name = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 385px;
    margin-top: 168px;
    margin-left: 105px;
    @media (max-width: 1440px) {
      margin-left: 0px;
    }
    @media (max-width: 540px) {
      align-content: flex-start;
    }
  `;
  const WhatIDo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 385px;
    margin-top: 168px;
    margin-left: 105px;
    @media (max-width: 1825px) {
      margin-left: 40px;
    }
    @media (max-width: 1600px) {
      flex-direction: row;
      margin-left: 30px;
    }
    @media (max-width: 1440px) {
      margin-top: 0px;
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 414px) {
    }
  `;

  const fadeIn = (sectionNum) => {
    anime.timeline({ loop: false }).add({
      targets: `p`,
      rotateY: [0, -30, 0],
      duration: 3000,
      delay: 0,
    });
  };

  return (
    <Int>
      <Container id={props.id}>
        <Name>
          <BoldText
            content="daniil"
            size="20"
            color="#E4E4E4"
            addRules="
        @media (max-width: 1825px) {
    font-size:17vw;
  }
  @media (max-width : 1600px){
  font-size:13vw;
  }
  @media (max-width : 1440px){
  font-size:12vw;
  }
  @media (max-width : 768px){
  font-size:10vw;
  }
  @media (max-width : 540px){
        height:fit-content;
        }
        @media (max-width : 414px){
  font-size:8vw;
  }
        "
          />
          <BoldText
            content="shcherbakov"
            size="1"
            color="#E4E4E4"
            addRules="
        @media (max-width: 1825px) {
             font-size:9vw;
        }
     "
          />
          <Waypoint onEnter={() => fadeIn(1)} />
        </Name>
        <WhatIDo>
          <div style={{ flexGrow: 1 }}>
            <BoldText
              content="i create adaptive websites"
              size="5"
              color="#E4E4E4"
              addRules="
                @media (max-width : 540px){
                font-size:60px;
                margin-top:52px;
                }
                @media (max-width : 414px){
                font-size:30px;
                width:400px;
                margin-top:30px;
                padding-left:30px;
                }
                "
            />
            <BoldText
              content=" and web-applications "
              size="3"
              color="#E4E4E4"
              addRules="
                @media (max-width : 540px){
                font-size:40px;
                margin-top:72px;
                margin-right:64px;
                text-align:right;
                }
                "
            />
          </div>
          <BoldText
            content="front-end developer"
            size="180"
            color="#E4E4E4"
            addRules="margin:20px 0px 0px 90px;
                @media (max-width: 1825px) {
                    font-size:154px;
                    padding-top:40px;
                }
                @media (max-width : 1600px){
                    font-size: 100px;
                    width:604px;
                    flex-grow:2;
                }
                @media (max-width : 1440px){
        font-size:100px;
        }
        @media (max-width : 768px){
        font-size:80px;
        margin-left:20px;
        }
        @media (max-width : 540px){
        position:absolute;
        top:5%;
        font-size:60px;
        }
        @media (max-width : 414px){
  font-size:40px;
  width:400px;
  margin-left:50px;
  }
                "
          />
        </WhatIDo>
      </Container>
    </Int>
  );
};

export default Intro;
