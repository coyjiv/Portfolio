import './App.scss';
import React from "react";
import Menu from "./Components/Menu/Menu";
import Intro from "./Components/Intro/Intro";
import SomeWorkBanner from "./Components/SomeWorkBanner/SomeWorkBanner";
import PortfolioCards from "./Components/PortfolioCards/PortfolioCards";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

const App = (props) => (
    <>
        <main className="App">
            <Menu/>
            <Intro/>
            <SomeWorkBanner/>
            <PortfolioCards/>
            <About/>
            <Contacts/>
        </main>
        <Footer/>
    </>
);

export default App;

