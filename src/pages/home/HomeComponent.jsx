import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Footer from '../../components/footer/Footer';
import Skills from '../../containers/skills/Skills';
import TopButton from "../../components/topButton/TopButton";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Home;
