import "./App.scss";
import React from "react";
import Menu from "./Components/Menu/Menu";
import Intro from "./Components/Intro/Intro";
import SomeWorkBanner from "./Components/SomeWorkBanner/SomeWorkBanner";
import PortfolioCards from "./Components/PortfolioCards/PortfolioCards";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
  return (
    <>
      <main className="App">
        <div className="container">
          <Menu />
          <Intro id="home" />
          <SomeWorkBanner />
          <PortfolioCards id="portfolio" />
          <About id="about" />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
