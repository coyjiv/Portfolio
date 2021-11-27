import './App.scss';
import React, {useRef, useEffect} from "react";
import Menu from "./Components/Menu/Menu";
import Intro from "./Components/Intro/Intro";
import SomeWorkBanner from "./Components/SomeWorkBanner/SomeWorkBanner";
import PortfolioCards from "./Components/PortfolioCards/PortfolioCards";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import {ScApp, ScAppContainer} from "./styled";
import {useWindowSize} from "./hooks/index";

const App = () => {
    const size = useWindowSize();
    const app = useRef()
    const scrollContainer = useRef()

    useEffect(() => {
        document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
    }, [size.height])

    const skewConfig = {
        ease: .1,
        current: 0,
        previous: 0,
        rounded: 0,
    }

    const skewScrolling = () => {
        if (scrollContainer != null){
            skewConfig.current = window.scrollY;
            skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
            skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

            const difference = skewConfig.current - skewConfig.rounded;
            const acceleration = difference / size.width;
            const velocity = +acceleration;
            const skew = velocity * 7.5;

            scrollContainer.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`
            requestAnimationFrame(() => skewScrolling())
        }
        return
    }
    useEffect(()=>skewScrolling(),[skewScrolling])
    return (
        <>
            <ScApp ref={app}>
                <ScAppContainer ref={scrollContainer}>
                    <Menu/>
                    <Intro id="home"/>
                    <SomeWorkBanner/>
                    <PortfolioCards id="portfolio"/>
                    <About id="about"/>
                    <Footer/>
                </ScAppContainer>
            </ScApp>
        </>
    )
}

export default App;

