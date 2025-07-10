import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader/index.jsx";
import "./styles.css";

const personalDetails = [
  {
    label: "Name",
    value: "Anahit Poghosyan",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Armenia",
  },
  {
    label: "Email",
    value: "anahit2002anahit@gmail.com",
  },
  {
    label: "Phone",
    value: "+374-94-516-615",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30}></BsInfoCircleFill>}
      ></PageHeaderContent>
      <div className="about__me__infos">
        <div className="about__me">
          <h3 className="personalInfoHeaderText">Personal Information</h3>
          <ul>
            {personalDetails.map((el, i) => {
              return (
                <li key={i}>
                  <span className="title">{el.label}: </span>
                  <span className="value">{el.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="about__me-frontend">
          <h3 className="personalInfoHeaderText">About Myself</h3>
          <p className="personalInfoFrontend">
            I am a motivated and dedicated individual eager to grow and develop
            in the tech industry. I have strong skills in frontend development
            and some experience with backend technologies. Additionally, I have
            formally studied cybersecurity at the university level and am on
            track to graduate with a red diploma. I enjoy combining my knowledge
            of web development and cybersecurity to build secure, practical, and
            user-friendly applications. I am always enthusiastic about learning
            new technologies and taking on challenges that help me improve and
            contribute effectively.
          </p>
        </div>
      </div>
    </section>
  );
}
