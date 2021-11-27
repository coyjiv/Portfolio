import React, {useRef, useEffect} from 'react';
import BoldText from "../BoldText/BoldText";
import hoverEffect from "hover-effect";
import {ScSomeworkBannerContainer, ScImageWrapper, ScBannerInfo} from "./styled";

const SomeWorkBanner = (props) => {

    const container = useRef(0);
    useEffect(() => {
        new hoverEffect({
            parent: container.current,
            intensity: 0.1,
            image1: "/someworkbanner1.png",
            image2: "/someworkbanner1.png",
            displacementImage:
                "/DisplacementMap.png"
        });
    }, [container]);
    return (
        <ScSomeworkBannerContainer>
            <ScBannerInfo>
                <BoldText content="some" size="180" color="#E4E4E4" addRules="margin-left:74px; margin-top:102px;"/>
                <BoldText content="works" size="180" color="#E4E4E4" addRules="margin-left:494px;"/>
                <BoldText content="of my" size="180" color="#E4E4E4" addRules="margin-left:calc(80% - 320px);"/>
                <BoldText content="the results of my work as a developer" size="24" color="#FFF"
                          addRules="width:433px; margin-left:calc(30% - 224px); margin-top:95px;"/>
            </ScBannerInfo>
            <ScImageWrapper ref={container}/>
        </ScSomeworkBannerContainer>
    )
};

export default SomeWorkBanner;