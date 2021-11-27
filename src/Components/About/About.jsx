import React from 'react';
import "./About.scss";
import BoldText from "../BoldText/BoldText";

const About = (props) => {
    return(
        <section className="about" id={props.id}>
            <BoldText content="about me" size="150" color="#E4E4E4" addRules="width: 450px;
    padding-top: 40px;"/>
            <BoldText content="I am a front-end developer from Kyiv, I like creating interesting designs and programming. Basically, in my work I use technologies such as HTML, JS, CSS, REACT.JS, Webpack, Gulp, Node JS and so on." size="44" color="#E4E4E4"
                      addRules="
                      text-transform:none;
                      width: 1137px;
                      line-height: 83px;
                      position:absolute;
                      z-index:3;
                      top:300px;
                      left:calc(70% - 1000px);
                      transform:translateY(200px);
                      "/>
            <img src="/selfie.png" alt="author selfie" className="selfie"></img>
            <img src="/dribbb.gif" alt="hud gif" className="hud"></img>
            <BoldText content="I also have extensive experience in the field of visual effects, video editing, and 3D visualization. In my work, I often use programs such as Photoshop, Illustrator, After Effects, or Cinema 4D" size="44" color="#FFFFFF"
                      addRules="
                      text-transform:none;
                      width: 1137px;
                      line-height: 83px;
                      position:absolute;
                      z-index:2;
                      left:calc(90% - 1200px);
                      transform:translateY(1200px);
                      text-shadow: 5px 4px 5px rgba(0, 0, 0, 0.2) ;
                      "/>
            <BoldText id="contacts" size="100" color="#E4E4E4" addRules="position:absolute; top:calc(100% - 730px); left:calc(7% - 40px);" content="contacts"/>
            <div className="social-wrapper">
                <div className="social-wrapper-item">
                    <img src="/soc-icons/gmail.svg" width="27" alt="" className="social-icon"/>
                    <a href="mailto:djdaniil46@gmail.com" className="social-link">Email</a>
                </div>
                <div className="social-wrapper-item">
                    <img src="/soc-icons/telegram.svg" width="27" alt="" className="social-icon"/>
                    <a href="https://t.me/kuawq" className="social-link">Telegram</a>
                </div>
                <div className="social-wrapper-item">
                    <img src="/soc-icons/linkedin.svg" width="27" alt="" className="social-icon"/>
                    <a href="https://www.linkedin.com/in/shcherbakovfrontend/" className="social-link">LinkedIn</a>
                </div>
            </div>
        </section>

    )
};

export default About;