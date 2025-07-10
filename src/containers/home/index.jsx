import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
export default function Home() {
  const navigate = useNavigate();
  //console.log(navigate);

  const handleNavigateContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Anahit,
          <br />a Web Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home__contact-me">
          <a href="/anahitSite.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </Animate>
    </section>
  );
}
