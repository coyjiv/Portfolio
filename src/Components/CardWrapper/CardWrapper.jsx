import React from 'react';
import styled from "styled-components";
import Card from "../Card/Card";

const CardWrapper = (props) => {
    const CardC = styled.div`
    padding-top:102px;
    height: 1890px;
     width:80%;
      margin:0px auto;
       display:flex;
        flex-wrap:wrap;
        flex-direction: column;
         justify-content:flex-start;
          align-content:flex-start;
          align-items:flex-start;
           gap:50px;
           row-gap:208px`;
    return(
        <CardC>
            <Card url="https://sertin.netlify.app/" name="SERTIN" color="#C4C4C4" fsize="80" infoSize="25" info="Landing Page with UI interactions. Non-adaptive."
                  addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                  cardRules="background: rgb(94,97,97);
background: linear-gradient(0deg, rgba(94,97,97,1) 0%, rgba(32,31,31,1) 69%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

                  "/>
                  <Card url="https://coyjiv.github.io/Test-Landing/" name="landing" color="#201F1F;" fsize="61" infoSize="30" info="Landing Page with UI interactions. Adaptive for most resolutions."
                        addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                        cardRules="background: rgb(168,168,168);
background: linear-gradient(0deg, rgba(168,168,168,1) 0%, rgba(196,196,196,1) 100%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
                  <Card url="https://twittertest.netlify.app/" name="TWITTER POST" infoSize="30" info="Blog variation logic app. Adaptive for most resolutions." color="#C4C4C4" fsize="44"
                        addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                        cardRules="background: rgb(94,97,97);
background: linear-gradient(0deg, rgba(94,97,97,1) 0%, rgba(32,31,31,1) 69%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
                  <Card url="https://yalukaiwo.github.io/forkio/#" name="FORKIO" infoSize="30" info="The landing fully-adaptive project that I've made with my colleague Luka Ponomarenko a couple of months ago. Adaptive for most resolutions."color="#C4C4C4" fsize="80"
                        addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                        cardRules="background: rgb(94,97,97);
background: linear-gradient(0deg, rgba(94,97,97,1) 0%, rgba(32,31,31,1) 69%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
                  <Card url="https://fatheroscillator.netlify.app/" name="OSCILLATOR" infoSize="25" info="Oscillator playground where you can set different soundwave
frequency and discover how does the sound changes due to number of oscillators."background="#C4C4C4" color="#201F1F" fsize="53"
                        addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                        cardRules="background: rgb(168,168,168);
background: linear-gradient(0deg, rgba(168,168,168,1) 0%, rgba(196,196,196,1) 100%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
                  <Card url="https://reactshope.netlify.app/" name="REACTSHOP" infoSize="30" info="Small shop logic app that I've made using React. Adaptive for most resolutions."background="#201F1F" color="#C4C4C4" fsize="42"
                        addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                        cardRules="background: rgb(94,97,97);
background: linear-gradient(0deg, rgba(94,97,97,1) 0%, rgba(32,31,31,1) 69%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
            <Card url="https://thehamproject.netlify.app/" name="THE HAM" infoSize="30" info="Landing Page with basic UI interactions. Adaptive for most resolutions."color="#C4C4C4" fsize="67"
                  addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                  cardRules="background: rgb(94,97,97);
background: linear-gradient(0deg, rgba(94,97,97,1) 0%, rgba(32,31,31,1) 69%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
            <Card url="https://architecturelanding.netlify.app/" name="ARCHITECTURE" infoSize="30" info="Landing Page with basic UI interactions. Adaptive for most resolutions."background="#C4C4C4" color="#201F1F" fsize="45"
                  addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                  cardRules="background: rgb(168,168,168);
background: linear-gradient(0deg, rgba(168,168,168,1) 0%, rgba(196,196,196,1) 100%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
            <Card url="https://github.com/yalukaiwo/doctorappointments" name="doctor appointments" infoSize="25" info="This is a small app that we have created with my colleagues: Luka Ponomarenko and Vitalii Tabanets in pure vanilla JS. The goal was to create an app where the secretary could easily create visits for patients and write additional info."color="#C4C4C4" fsize="43"
                  addRules="
                  transform:translateY(26px)translateX(22px);
                  "
                  cardRules="background: rgb(94,97,97);
background: linear-gradient(0deg, rgba(94,97,97,1) 0%, rgba(32,31,31,1) 69%);box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
                  "/>
        </CardC>
    );
}

export default CardWrapper;