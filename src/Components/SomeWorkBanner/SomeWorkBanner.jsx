import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import BoldText from "../BoldText/BoldText";
import hoverEffect from "hover-effect";

const SomeWorkBanner = (props) => {
  const Cont = styled.section`
    padding-top: 54px;
    padding-bottom: 35px;
    background-color: #2d2d2d;
    position: relative;
    z-index: 0;
  `;
  const StyledImg = styled.div`
    margin: 0px auto;
    height: 75vw;
    width: 97%;
  `;
  const UpperCont = styled.div`
    height: 700px;
    position: absolute;
    z-index: 5;
    width: 100%;
  `;
  const container = useRef();
  useEffect(() => {
    new hoverEffect({
      parent: container.current,
      intensity: 0.1,
      image1: "/someworkbanner1.png",
      image2: "/someworkbanner1.png",
      displacementImage: "/DisplacementMap.png",
    });
  }, [container]);
  return (
    <Cont>
      <UpperCont>
        <BoldText
          content="some"
          size="10"
          color="#E4E4E4"
          addRules="margin-left:10vw; margin-top:20vw;"
        />
        <BoldText
          content="works"
          size="7"
          color="#E4E4E4"
          addRules="margin-left:38vw;"
        />
        <BoldText
          content="of my"
          size="10"
          color="#E4E4E4"
          addRules="margin-left:55vw;"
        />
        <BoldText
          content="the results of my work as a developer"
          size="4"
          color="#FFF"
          addRules="padding:0 10vw; margin-left:16vw; margin-top:13vw;"
        />
      </UpperCont>
      <StyledImg ref={container} />
    </Cont>
  );
};

export default SomeWorkBanner;
