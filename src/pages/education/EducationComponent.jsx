import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EducationImg from "./EducationImg";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { competitiveSites } from "../../portfolio";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import TopButton from "../../components/topButton/TopButton";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Education;
