import './App.scss';
import React from "react";
import Menu from "./Components/Menu/Menu";
import Intro from "./Components/Intro/Intro";
import SomeWorkBanner from "./Components/SomeWorkBanner/SomeWorkBanner";
import PortfolioCards from "./Components/PortfolioCards/PortfolioCards";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import BoldText from "./Components/BoldText/BoldText";

const App = (props) => {

    return(
        <>
            <main className="App">
                <Menu/>

                <Intro id="home"/>
                <SomeWorkBanner/>
                <PortfolioCards id="portfolio"/>
                <About id="about"/>
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
                <Footer/>
            </main>

        </>
    );
}

export default App;

