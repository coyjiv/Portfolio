import React from "react";
import "./About.scss";
import BoldText from "../BoldText/BoldText";

const About = (props) => {
  return (
    <section className="about" id={props.id}>
      <BoldText
        content="about me"
        size="15"
        color="#E4E4E4"
        addRules="width: 20vw;
    padding-top: 40px;"
      />
      <BoldText
        content="I am a front-end developer from Kyiv, I like creating interesting designs and programming. Basically, in my work I use technologies such as HTML, JS, CSS, REACT.JS, Webpack, Gulp, Node JS and so on."
        size="3.5"
        color="#E4E4E4"
        addRules="
                      text-transform:none;
                      width: 70vw;
                      margin: 9vw 0vw 0vw 20vw;
                      "
      />
      <img src="/selfie.png" alt="author selfie" className="selfie"></img>
      <img src="/dribbb.gif" alt="hud gif" className="hud"></img>
      <BoldText
        content="I also have extensive experience in the field of visual effects, video editing, and 3D visualization. In my work, I often use programs such as Photoshop, Illustrator, After Effects, or Cinema 4D"
        size="3"
        color="#E4E4E4"
        addRules="
                      text-transform:none;
                      width: 40vw;
                      margin:13vw 10vw 0vw 40vw;
                      "
      />
    </section>
  );
};

export default About;
